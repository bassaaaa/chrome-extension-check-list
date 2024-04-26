import { ListMenu } from "./components/ListMenu";
import { ButtonDisabled, ButtonEnabled } from "./components/Button";
import { Textarea } from "./components/Textarea";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleCopy: () => void = () => {
    if (text !== "") {
      navigator.clipboard.writeText(text).then(() => {
        console.log(text);
      });
    } else {
      console.log("No text to copy");
    }
  };

  return (
    <div className="p-2 w-96 flex flex-col gap-2">
      <ListMenu />
      <Textarea id="textarea" value={text} onChange={(e) => setText(e.target.value)} />
      {text !== "" ? <ButtonEnabled onClick={handleCopy}>クリップボードにコピー</ButtonEnabled> : <ButtonDisabled onClick={() => {}}>クリップボードにコピー</ButtonDisabled>}
    </div>
  );
};

export default App;

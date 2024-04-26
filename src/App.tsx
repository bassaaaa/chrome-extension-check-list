import { ListMenu } from "./components/ListMenu";
import { CopyButton } from "./components/CopyButton";
import { Textarea } from "./components/Textarea";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleCopy: () => void = () => {
    if (text === "") {
      console.log("No text to copy");
    } else {
      navigator.clipboard.writeText(text).then(() => {
        console.log(text);
      });
    }
  };

  return (
    <div className="p-2 w-96 flex flex-col gap-2">
      <ListMenu />
      <Textarea id="textarea" value={text} onChange={(e) => setText(e.target.value)} />
      <CopyButton onClick={handleCopy} disabled={text === ""} />
    </div>
  );
};

export default App;

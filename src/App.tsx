import { ListMenu } from "./components/ListMenu";
import { ButtonEnabled } from "./components/Button";
import { Textarea } from "./components/Textarea";

const App = () => {
  const handleCopy: () => void = () => {
    const textarea = document.getElementById("textarea") as HTMLTextAreaElement;
    const text = textarea.value !== "" ? textarea.value : null;
    if (text) {
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
      <Textarea id="textarea" />
      <ButtonEnabled onClick={handleCopy}>コピー</ButtonEnabled>
    </div>
  );
};

export default App;

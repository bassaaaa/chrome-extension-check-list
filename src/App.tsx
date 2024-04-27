import { ListMenu } from "./components/ListMenu";
import { CopyButton } from "./components/CopyButton";
import { Textarea } from "./components/Textarea";
import { useState } from "react";
import { checkList } from "./data/checkList";
import { ToggleWithLabel } from "./components/ToggleWithLabel";

const App = () => {
  const [text, setText] = useState("");
  const [checkedItems, setCheckedItems] = useState<{ [id: number]: boolean }>({});

  const handleCopy: () => void = () => {
    if (text === "") {
      console.log("No text to copy");
    } else {
      navigator.clipboard.writeText(text).then(() => {
        console.log(text);
      });
    }
  };

  const handleCheckboxChange = (id: number, checked: boolean) => {
    setCheckedItems((prevState) => {
      const updatedItems = { ...prevState, [id]: checked };
      const checkedLabels = Object.keys(updatedItems)
        .filter((id: string) => updatedItems[parseInt(id)])
        .map((checkedId) => checkList.items.find((item) => item.id === parseInt(checkedId)))
        .filter((item) => item !== undefined)
        .map((item) => item!.label);
      setText(checkedLabels.map((label) => `${checkList.confirmedStatus}: ${label}`).join("\n"));
      return updatedItems;
    });
  };

  return (
    <div className="p-2 w-96 flex flex-col gap-2">
      <ListMenu title={checkList.title}>
        {checkList.items.map((item) => (
          <li key={item.id}>
            <ToggleWithLabel {...item} checked={checkedItems[item.id] || false} onChange={(e) => handleCheckboxChange(item.id, e.target.checked)} />
          </li>
        ))}
      </ListMenu>
      <Textarea id="textarea" value={text} onChange={(e) => setText(e.target.value)} />
      <CopyButton onClick={handleCopy} disabled={text === ""} />
    </div>
  );
};

export default App;

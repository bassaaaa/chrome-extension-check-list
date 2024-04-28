import { ListMenu } from "./components/ListMenu";
import { CopyButton } from "./components/CopyButton";
import { Textarea } from "./components/Textarea";
import { useState } from "react";
import { checkList } from "./data/checkList";
import { ToggleWithLabel } from "./components/ToggleWithLabel";
import { Modal } from "./components/Modal";
import { SelectBox } from "./components/SelectBox";

const App = () => {
  const [text, setText] = useState(checkList.outputText);
  const [checkedItems, setCheckedItems] = useState<{ [id: number]: boolean }>({});
  const [selectedCategory, setSelectedCategory] = useState<number>(-1);

  const handleCopy: () => void = () => {
    try {
      navigator.clipboard.writeText(text).then(() => {
        const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
        modal.showModal();
      });
    } catch (error) {
      console.error("コピーに失敗しました: ", error);
    }
  };

  const handleCheckboxChange = (id: number, checked: boolean) => {
    setCheckedItems((prevState) => {
      const updatedItems = { ...prevState, [id]: checked };
      const checkedLabels = Object.keys(updatedItems)
        .filter((id: string) => updatedItems[parseInt(id)])
        .map((checkedId) => checkList.categories[0].items.find((item) => item.id === parseInt(checkedId)))
        .filter((item) => item !== undefined)
        .map((item) => item!.label);
      const outputText = checkList.outputText + "\n" + checkedLabels.map((label) => `${checkList.confirmedStatus}: ${label}`).join("\n");
      setText(outputText);
      return updatedItems;
    });
  };

  const handleSelectBoxChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex - 1;
    setCheckedItems({});
    setText(checkList.outputText);
    setSelectedCategory(selectedIndex);
  };

  return (
    <div className="p-2 w-96 flex flex-col gap-2 m-auto">
      <ListMenu title={checkList.checkListTitle}>
        <SelectBox onChange={handleSelectBoxChange} />
        {selectedCategory < 0 ? (
          <></>
        ) : (
          checkList.categories[selectedCategory].items.map((item) => (
            <li key={item.id}>
              <ToggleWithLabel {...item} checked={checkedItems[item.id] || false} onChange={(e) => handleCheckboxChange(item.id, e.target.checked)} />
            </li>
          ))
        )}
      </ListMenu>
      <Textarea id="textarea" value={text} onChange={(e) => setText(e.target.value)} />
      <CopyButton onClick={handleCopy} disabled={text === ""} />
      <Modal text={text} />
    </div>
  );
};

export default App;

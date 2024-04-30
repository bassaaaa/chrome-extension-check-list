import { ListMenu } from "../components/ListMenu";
import { CopyButton } from "../components/CopyButton";
import { Textarea } from "../components/Textarea";
import { useState } from "react";
import { checkList } from "../data/checkList";
import { ToggleWithLabel } from "../components/ToggleWithLabel";
import { Modal } from "../components/Modal";
import { SelectBox } from "../components/SelectBox";

type ListItems = {
  label: string;
  tip: string;
}[];

export const App = () => {
  const [text, setText] = useState(checkList.outputText);
  const [checkedItems, setCheckedItems] = useState<{ [id: number]: boolean }>({});
  const [selectedCategory, setSelectedCategory] = useState<number>(-1);
  const [listItems, setListItems] = useState<ListItems>(checkList.commonItems);

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

  const handleCheckboxChange = (key: number, checked: boolean) => {
    setCheckedItems((prevState) => {
      const updatedItems = { ...prevState, [key]: checked };
      const checkedItems = Object.keys(updatedItems)
        .filter((key) => updatedItems[Number(key)])
        .map((key) => {
          const listItem = listItems[Number(key)];
          return {
            key: Number(key),
            label: listItem.label,
          };
        });
      const commonItems = checkedItems.filter((item) => item.key < checkList.commonItems.length);
      const secondaryItems = checkedItems.filter((item) => item.key >= checkList.commonItems.length);
      // console.log(commonItems);
      // console.log(checkedItems);
      // console.log(commonItems);
      // console.log("secondaryItems: " + secondaryItems);
      const outputText =
        checkList.outputText +
        "\n" +
        (commonItems.length > 0
          ? "\n" +
            checkList.common +
            "\n" +
            commonItems.map((item) => `${checkList.confirmed} ${item.label}`).join("\n")
          : "") +
        (secondaryItems.length > 0
          ? "\n" +
            checkList.categories[selectedCategory].primaryItem.secondary +
            "\n" +
            secondaryItems.map((item) => `${checkList.confirmed} ${item.label}`).join("\n")
          : "");
      setText(outputText);
      return updatedItems;
    });
  };

  const handleSelectBoxChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex - 1;
    setCheckedItems({});
    setText(checkList.outputText);
    // 共通部分と選択されたカテゴリのセカンダリアイテムを結合
    setListItems(checkList.commonItems.concat(checkList.categories[selectedIndex].primaryItem.secondaryItems));
    setSelectedCategory(selectedIndex);
  };

  return (
    <div className="p-2 w-96 flex flex-col gap-2 m-auto">
      <ListMenu title={checkList.checkListTitle}>
        <SelectBox onChange={handleSelectBoxChange} />
        {selectedCategory < 0 ? (
          <></>
        ) : (
          <div>
            <div className="ml-2 my-2 font-bold">{checkList.common}</div>
            {listItems.map((item, key) => (
              <div key={item.label}>
                <>
                  {key === checkList.commonItems.length ? (
                    <div className="ml-2 my-2 font-bold">
                      {checkList.categories[selectedCategory].primaryItem.secondary}
                    </div>
                  ) : (
                    <></>
                  )}
                </>
                <li>
                  <ToggleWithLabel
                    {...item}
                    checked={checkedItems[key] || false}
                    onChange={(e) => handleCheckboxChange(key, e.target.checked)}
                  />
                </li>
              </div>
            ))}
          </div>
          // <div key={checkList.categories[selectedCategory].primary}>
          //   {checkList.categories[selectedCategory].primaryItems.map((primaryItem) => (
          //     <div key={primaryItem.secondary}>
          //       <div className="ml-2 my-2 font-bold">{primaryItem.secondary}</div>
          //       {primaryItem.secondaryItems.map((item, key) => (
          //         <li key={item.label}>
          //           <ToggleWithLabel
          //             {...item}
          //             checked={checkedItems[key] || false}
          //             onChange={(e) => handleCheckboxChange(key, e.target.checked)}
          //           />
          //         </li>
          //       ))}
          //     </div>
          //   ))}
          // </div>
          // <>
          //   <>
          //     <div>{checkList.common.category}</div>
          //     {checkList.common.items.map((item, key) => (
          //       <li key={item.label}>
          //         <ToggleWithLabel
          //           {...item}
          //           checked={checkedItems[key] || false}
          //           onChange={(e) => handleCheckboxChange(key, e.target.checked)}
          //         />
          //       </li>
          //     ))}
          //   </>
          //   <>
          //     <div>{checkList.exclusives[selectedCategory].category}</div>
          //     {checkList.exclusives[selectedCategory].items.map((item, key) => (
          //       <li key={item.label}>
          //         <ToggleWithLabel
          //           {...item}
          //           checked={checkedItems[key] || false}
          //           onChange={(e) => handleCheckboxChange(key, e.target.checked)}
          //         />
          //       </li>
          //     ))}
          //   </>
          // </>
        )}
      </ListMenu>
      <Textarea value={text} onChange={(e) => setText(e.target.value)} />
      <CopyButton onClick={handleCopy} disabled={text === ""} />
      <Modal text={text} />
    </div>
  );
};

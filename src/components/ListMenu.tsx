import { checkList } from "../data/checkList";
import { ToggleWithLabel } from "./ToggleWithLabel";

export const ListMenu = () => {
  return (
    <ul className="menu bg-base-200 rounded-box">
      <li className="menu-title items-center">{checkList.title}</li>
      {checkList.items.map((item) => (
        <li>
          <ToggleWithLabel {...item} />
        </li>
      ))}
    </ul>
  );
};

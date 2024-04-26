import { CopyButton } from "./components/CopyButton";
import { Textarea } from "./components/Textarea";
import { ToggleWithLabel } from "./components/ToggleWithLabel";
import { checkList } from "./data/checkList";

function App() {
  return (
    <div className="p-2 w-96 flex flex-col gap-2">
      <ul className="menu bg-base-200 rounded-box">
        <li className="menu-title items-center">{checkList.title}</li>
        {checkList.items.map((item) => (
          <li>
            <ToggleWithLabel {...item} />
          </li>
        ))}
      </ul>
      <Textarea />
      <CopyButton />
    </div>
  );
}

export default App;

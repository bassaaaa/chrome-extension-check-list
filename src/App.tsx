import { ToggleWithLabel } from "./components/ToggleWithLabel";
import { checkList } from "./data/checkList";

function App() {
  return (
    <div className="p-2 w-80">
      <ul className="menu bg-base-200 rounded-box">
        <li className="menu-title items-center">{checkList.title}</li>
        {checkList.items.map((item) => (
          <li>
            <ToggleWithLabel {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { ToggleWithLabel } from "./components/ToggleWithLabel";

const items = [
  {
    id: 1,
    label: "チェック項目1",
    tip: "補足事項1",
  },
  {
    id: 2,
    label: "チェック項目2",
    tip: "補足事項2",
  },
  {
    id: 3,
    label: "チェック項目3",
    tip: "補足事項3",
  },
];

function App() {
  return (
    <div className="p-2 w-80">
      <ul className="menu bg-base-200 rounded-box">
        <li className="menu-title items-center">チェックリスト</li>
        {items.map((item) => (
          <li>
            <ToggleWithLabel {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

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
    <div className="px-2 py-5">
      {items.map((item) => (
        <ToggleWithLabel {...item} />
      ))}
    </div>
  );
}

export default App;

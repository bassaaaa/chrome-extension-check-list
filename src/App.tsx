import { ToggleWithLabel } from "./components/ToggleWithLabel";

const items = [
  { id: 1, label: "item 1" },
  { id: 2, label: "item 2" },
  { id: 3, label: "item 3" },
  { id: 4, label: "item 4" },
  { id: 5, label: "item 5" },
];

function App() {
  return (
    <div className="App">
      {items.map((item) => (
        <ToggleWithLabel {...item} />
      ))}
    </div>
  );
}

export default App;

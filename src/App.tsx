import { ListMenu } from "./components/ListMenu";
import { CopyButton } from "./components/CopyButton";
import { Textarea } from "./components/Textarea";

function App() {
  return (
    <div className="p-2 w-96 flex flex-col gap-2">
      <ListMenu />
      <Textarea />
      <CopyButton />
    </div>
  );
}

export default App;

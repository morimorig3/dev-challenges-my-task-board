import { Header } from "./components/Header";
import { IconButton } from "./components/IconButton";
import { TaskCard } from "./components/TaskCard";

function App() {
  return (
    <div className="font-[Outfit] p-10">
      <Header onClickEdit={() => {}} />
      <IconButton iconType="coffee" isSelected={false} onClick={() => {}} />
      <main>
        <ul>
          <TaskCard
            iconType="work"
            cardType="wontDo"
            title="My Task"
            description="My Description"
            onClick={() => {}}
          />
        </ul>
      </main>
    </div>
  );
}

export default App;

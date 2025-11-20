import { Header } from "./components/Header";
import { TaskCard } from "./components/TaskCard";

function App() {
  return (
    <div className="font-[Outfit] p-10">
      <Header onClickEdit={() => {}} />
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

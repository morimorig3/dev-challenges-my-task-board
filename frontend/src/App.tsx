import { AddTaskCard } from "./components/AddTaskCard";
import { Header } from "./components/Header";
import { TaskCard } from "./components/TaskCard";

function App() {
  return (
    <div className="font-[Outfit] px-10 py-14">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <Header onClickEdit={() => {}} />
        </div>
        <main className="flex flex-col gap-y-6">
          <TaskCard
            cardType="inProgress"
            iconType="watch"
            onClick={() => {}}
            title="Task in Progress"
          />
          <AddTaskCard onClick={() => {}} />
        </main>
      </div>
    </div>
  );
}

export default App;

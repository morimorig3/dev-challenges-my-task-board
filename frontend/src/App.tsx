import { TaskCard } from "./components/TaskCard";

function App() {
  return (
    <div className="font-[Outfit] p-10">
      <main>
        <h1 className="text-[40px]">My Task Board</h1>
        <ul>
          <TaskCard
            iconType="work"
            cardType="wontDo"
            title="My Task"
            description="My Description"
          />
        </ul>
      </main>
    </div>
  );
}

export default App;

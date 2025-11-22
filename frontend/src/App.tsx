import { useState } from "react";
import { AddTaskCard } from "./components/AddTaskCard";
import { Header } from "./components/Header";
import { TaskCard } from "./components/TaskCard";
import { TaskDetailsCard } from "./components/TaskDetailsCard";

function App() {
  const [isShowDetails, setIsShowDetail] = useState(false);
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
            onClick={() => setIsShowDetail(true)}
            title="Task in Progress"
          />
          <AddTaskCard onClick={() => {}} />
        </main>
      </div>
      <div
        className={`w-screen h-screen fixed inset-0 bg-[#00000033] transition duration-300 ${
          isShowDetails ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsShowDetail(false)}
      />
      <div
        onClick={(event) => event.stopPropagation()}
        className={`min-w-2xl h-[calc(100vh-40px)] fixed top-1/2 right-5 -translate-y-1/2 transition duration-300 ${
          isShowDetails
            ? "translate-x-0 opacity-100"
            : "opacity-0 translate-x-[calc(100%+20px)]"
        }`}
      >
        <TaskDetailsCard onClickClose={() => setIsShowDetail(false)} />
      </div>
    </div>
  );
}

export default App;

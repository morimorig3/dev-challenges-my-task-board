function App() {
  return (
    <div className="font-[Outfit] p-10">
      <main>
        <h1 className="text-[40px]">My Task Board</h1>
        <ul>
          <li>
            <div className="flex p-5 gap-5 rounded-2xl items-start bg-[#A0ECB1]">
              <p className="text-2xl w-12 h-12 grid place-items-center rounded-xl bg-white">
                📚
              </p>
              <div className="grow">
                <p className="text-xl font-semibold">Task Todo</p>
                <div>
                  description,descriptiondescriptiondescription
                  <br />
                  descriptiondescription
                </div>
              </div>
              <button>
                <p className="text-2xl w-12 h-12 grid place-items-center rounded-xl bg-[#32D657]">
                  ☑️
                </p>
              </button>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

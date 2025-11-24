import type { FC } from "react";
import logo from "@/assets/Logo.svg";
import checkIcon from "@/assets/Done_round.svg";

const LABEL_CLASS = "text-[#97A3B6] text-xs mb-1";
const INPUT_CLASS =
  "px-3 py-2 border border-[#97A3B6] w-full rounded-md outline-[#3662E3] placeholder-[#97A3B6]";
const BUTTON_CLASS =
  "w-28 h-9 text-sm text-white inline-flex items-center justify-center gap-1 rounded-full interactive-element";

interface BoardAddCardProps {
  onClickCreate: () => void;
}

export const BoardAddCard: FC<BoardAddCardProps> = ({ onClickCreate }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl px-7 py-5 h-full">
      <header className="flex gap-x-3 items-center mb-6">
        <img src={logo} alt="logo" />
        <p className="font-semibold text-xl">Let's Create Task Board</p>
      </header>
      <main className="flex flex-col gap-y-4">
        <InputBoardName />
        <InputBoardDescription />
        <button
          className={`${BUTTON_CLASS} bg-[#3662E3] mx-auto`}
          onClick={onClickCreate}
        >
          Create
          <img src={checkIcon} />
        </button>
      </main>
    </div>
  );
};

const InputBoardName = () => {
  return (
    <div>
      <p className={LABEL_CLASS}>Board name</p>
      <input
        className={INPUT_CLASS}
        type="text"
        maxLength={50}
        placeholder="Enter a task name"
      />
    </div>
  );
};

const InputBoardDescription = () => {
  return (
    <div>
      <p className={LABEL_CLASS}>Description</p>
      <textarea
        className={`${INPUT_CLASS} min-h-32`}
        maxLength={255}
        placeholder="Enter a short description"
      />
    </div>
  );
};

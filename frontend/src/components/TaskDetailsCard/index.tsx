import type { FC } from "react";
import closeIcon from "@/assets/close_ring_duotone-1.svg";
import trashIcon from "@/assets/Trash.svg";
import checkIcon from "@/assets/Done_round.svg";
import { StatusButton } from "../StatusButton";
import { IconButton } from "../IconButton";

const LABEL_CLASS = "text-[#97A3B6] text-xs mb-1";
const INPUT_CLASS =
  "px-3 py-2 border border-[#97A3B6] w-full rounded-md outline-[#3662E3] placeholder-[#97A3B6]";
const BUTTON_CLASS =
  "w-28 h-9 text-sm text-white inline-flex items-center justify-center gap-1 rounded-full interactive-element";
interface TaskDetailsCardProps {
  onClickClose: () => void;
}

export const TaskDetailsCard: FC<TaskDetailsCardProps> = ({ onClickClose }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl px-7 py-5 h-full">
      <header className="flex justify-between items-center mb-6">
        <p className="font-semibold text-sm">Task Details</p>
        <button
          onClick={onClickClose}
          className="border border-[#E3E8EF] grid place-items-center w-9 h-9 rounded-lg interactive-element"
        >
          <img src={closeIcon} alt="close" />
        </button>
      </header>
      <main className="flex flex-col gap-y-4">
        <InputTaskName />
        <InputTaskDescription />
        <IconList />
        <StatusList />
      </main>
      <footer className="mt-auto flex gap-x-4 justify-end">
        <button className={`${BUTTON_CLASS} bg-[#97A3B6]`}>
          Delete
          <img src={trashIcon} />
        </button>
        <button className={`${BUTTON_CLASS} bg-[#3662E3]`}>
          Save
          <img src={checkIcon} />
        </button>
      </footer>
    </div>
  );
};

const InputTaskName = () => {
  return (
    <div>
      <p className={LABEL_CLASS}>Task name</p>
      <input
        className={INPUT_CLASS}
        type="text"
        maxLength={50}
        placeholder="Enter a task name"
      />
    </div>
  );
};

const InputTaskDescription = () => {
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

const IconList = () => {
  return (
    <div>
      <p className={LABEL_CLASS}>Icon</p>
      <ul className="flex gap-x-3">
        <li>
          <IconButton iconType="work" isSelected={false} onClick={() => {}} />
        </li>
        <li>
          <IconButton
            iconType="meeting"
            isSelected={false}
            onClick={() => {}}
          />
        </li>
        <li>
          <IconButton iconType="coffee" isSelected={false} onClick={() => {}} />
        </li>
        <li>
          <IconButton
            iconType="trainig"
            isSelected={false}
            onClick={() => {}}
          />
        </li>
        <li>
          <IconButton iconType="book" isSelected={false} onClick={() => {}} />
        </li>
        <li>
          <IconButton iconType="watch" isSelected={false} onClick={() => {}} />
        </li>
      </ul>
    </div>
  );
};

const StatusList = () => {
  return (
    <div>
      <p className={LABEL_CLASS}>Status</p>
      <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
        <li>
          <StatusButton
            buttonType="inProgress"
            isSelected={false}
            onClick={() => {}}
          />
        </li>
        <li>
          <StatusButton
            buttonType="completed"
            isSelected={false}
            onClick={() => {}}
          />
        </li>
        <li>
          <StatusButton
            buttonType="wontDo"
            isSelected={false}
            onClick={() => {}}
          />
        </li>
      </ul>
    </div>
  );
};

import type { FC, MouseEventHandler } from "react";
import iconImage from "@/assets/Add_round_duotone.svg";

interface AddTaskCardProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const AddTaskCard: FC<AddTaskCardProps> = ({ onClick }) => {
  return (
    <button
      className="flex p-5 gap-5 rounded-2xl items-center bg-[#F5E8D5] w-full interactive-element"
      onClick={onClick}
    >
      <span className="grid place-items-center w-12 h-12 rounded-xl bg-[#E9A23B]">
        <img src={iconImage} />
      </span>
      <p className="font-semibold text-sm">Add New Task</p>
    </button>
  );
};

import type { FC, MouseEventHandler } from "react";
import logo from "@/assets/Logo.svg";
import editIcon from "@/assets/Edit_duotone.svg";

export interface HeaderProps {
  onClickEdit: MouseEventHandler<HTMLButtonElement>;
}

export const Header: FC<HeaderProps> = ({ onClickEdit }) => {
  return (
    <header className="flex gap-5 items-start">
      <img src={logo} alt="logo" />
      <div>
        <h1 className="text-[40px] flex gap-4 leading-none mb-2 line-clamp-1">
          My Task Board
          <button onClick={onClickEdit} className="interactive-element">
            <img src={editIcon} alt="Edit title" />
          </button>
        </h1>
        <p>Description</p>
      </div>
    </header>
  );
};

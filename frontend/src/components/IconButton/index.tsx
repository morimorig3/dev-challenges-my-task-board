import type { FC, MouseEventHandler } from "react";
import { ICON_MAP } from "@/constants/indes";

interface IconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  iconType: keyof typeof ICON_MAP;
  isSelected: boolean;
}

export const IconButton: FC<IconButtonProps> = ({
  onClick,
  iconType,
  isSelected,
}) => {
  const backgroundColor = isSelected ? "bg-[#F5D565]" : "bg-[#E3E8EF]";
  return (
    <button
      onClick={onClick}
      className={`grid place-items-center w-11 h-11 rounded-xl ${backgroundColor} hover:cursor-pointer hover:opacity-80 transition-opacity`}
    >
      {ICON_MAP[iconType]}
    </button>
  );
};

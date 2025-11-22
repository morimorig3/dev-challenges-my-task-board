import type { FC, MouseEventHandler } from "react";
import closeIcon from "@/assets/close_ring_duotone.svg";
import timeIcon from "@/assets/Time_atack_duotone.svg";
import doneIcon from "@/assets/Done_round_duotone.svg";
import selectIcon from "@/assets/Done_round.svg";

interface StatusButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  buttonType: keyof typeof BUTTON_MAP;
  isSelected: boolean;
}

export const StatusButton: FC<StatusButtonProps> = ({
  onClick,
  buttonType,
  isSelected,
}) => {
  const { label, icon, iconColor } = BUTTON_MAP[buttonType];
  const borderColor = isSelected ? "border-[#3662E3]" : "border-[#E3E8EF]";
  const fontWeight = isSelected ? "font-semibold" : "";
  return (
    <button
      onClick={onClick}
      className={`border-2 ${borderColor} ${fontWeight} flex items-center w-full rounded-xl gap-3 p-0.5 pr-3 text-sm interactive-element`}
    >
      <span
        className={`grid place-items-center w-11 h-11 rounded-xl ${iconColor}`}
      >
        <img src={icon} alt="icon" />
      </span>
      <span className="mr-auto">{label}</span>
      {isSelected && (
        <span className="w-5 h-5 rounded-full bg-[#3662E3] p-0.5">
          <img src={selectIcon} alt="icon" />
        </span>
      )}
    </button>
  );
};

const BUTTON_MAP = {
  completed: {
    label: "Completed",
    icon: doneIcon,
    iconColor: "bg-[#32D657]",
  },
  inProgress: {
    label: "In Progress",
    icon: timeIcon,
    iconColor: "bg-[#E9A23B]",
  },
  wontDo: {
    label: "Won't Do",
    icon: closeIcon,
    iconColor: "bg-[#DD524C]",
  },
} as const;

import type { FC, MouseEventHandler } from "react";
import { TaskIcons, type TaskIconsProps } from "../TaskIcon";
import closeIcon from "@/assets/close_ring_duotone.svg";
import timeIcon from "@/assets/Time_atack_duotone.svg";
import doneIcon from "@/assets/Done_round_duotone.svg";

interface TaskCardProps {
  iconType: TaskIconsProps["iconType"];
  cardType: keyof typeof CARD_TYPE_COLOR_MAP;
  title: string;
  description?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const TaskCard: FC<TaskCardProps> = ({
  iconType,
  cardType,
  title,
  description,
  onClick,
}) => {
  const { cardColor, iconColor, iconImage } = CARD_TYPE_COLOR_MAP[cardType];
  return (
    <button
      className={`w-full flex p-5 gap-5 rounded-2xl items-start interactive-element ${cardColor}`}
      onClick={onClick}
    >
      <TaskIcons iconType={iconType} />
      <div className="grow text-left">
        <p className="text-xl font-semibold">{title}</p>
        {description && <div>{description}</div>}
      </div>
      <span
        className={`grid place-items-center w-12 h-12 rounded-xl ${iconColor}`}
      >
        <img src={iconImage} />
      </span>
    </button>
  );
};

const CARD_TYPE_COLOR_MAP = {
  completed: {
    cardColor: "bg-[#A0ECB1]",
    iconColor: "bg-[#32D657]",
    iconImage: doneIcon,
  },
  inProgress: {
    cardColor: "bg-[#F5D565]",
    iconColor: "bg-[#E9A23B]",
    iconImage: timeIcon,
  },
  wontDo: {
    cardColor: "bg-[#F7D4D3]",
    iconColor: "bg-[#DD524C]",
    iconImage: closeIcon,
  },
} as const;

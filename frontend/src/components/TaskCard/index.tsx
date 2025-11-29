import type { FC, MouseEventHandler } from "react";
import { TaskIcons, type TaskIconsProps } from "../TaskIcon";
import { CARD_TYPE_COLOR_MAP } from "@/constants/indes";

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
  const {
    cardColor,
    iconColor = "",
    iconImage = "",
  } = CARD_TYPE_COLOR_MAP[cardType];
  return (
    <button
      className={`w-full flex p-5 gap-5 rounded-2xl items-start interactive-element ${cardColor}`}
      onClick={onClick}
    >
      <TaskIcons iconType={iconType} />
      <div className="grow text-left">
        <p className="text-xl font-semibold mb-1">{title}</p>
        {description && (
          <p className="text-sm line-clamp-2">{description}</p>
        )}
      </div>
      {iconImage && (
        <span
          className={`grid place-items-center w-12 h-12 rounded-xl ${iconColor}`}
        >
          <img src={iconImage} />
        </span>
      )}
    </button>
  );
};

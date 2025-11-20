import { ICON_MAP } from "@/constants/indes";
import type { FC } from "react";

export interface TaskIconsProps {
  iconType: keyof typeof ICON_MAP;
}

export const TaskIcons: FC<TaskIconsProps> = ({ iconType }) => {
  return (
    <span className="text-2xl w-12 h-12 grid place-items-center rounded-xl bg-white">
      {ICON_MAP[iconType]}
    </span>
  );
};

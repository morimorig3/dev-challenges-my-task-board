import type { FC } from "react";

export interface TaskIconsProps {
  iconType: keyof typeof ICON_MAP;
}

const ICON_MAP = {
  work: "🧑‍💻",
  meeting: "💬",
  trainig: "🏋️",
  coffee: "☕️",
  watch: "⏰",
  book: "📚",
} as const;

export const TaskIcons: FC<TaskIconsProps> = ({ iconType }) => {
  return (
    <span className="text-2xl w-12 h-12 grid place-items-center rounded-xl bg-white">
      {ICON_MAP[iconType]}
    </span>
  );
};

import closeIcon from "@/assets/close_ring_duotone.svg";
import timeIcon from "@/assets/Time_atack_duotone.svg";
import doneIcon from "@/assets/Done_round_duotone.svg";

export const ICON_MAP = {
  WORK: "🧑‍💻",
  MEETING: "💬",
  TRAINING: "🏋️",
  COFFEE: "☕️",
  WATCH: "⏰",
  BOOK: "📚",
} as const;

export const CARD_TYPE_COLOR_MAP = {
  COMPLETED: {
    cardColor: "bg-[#A0ECB1]",
    iconColor: "bg-[#32D657]",
    iconImage: doneIcon,
  },
  IN_PROGRESS: {
    cardColor: "bg-[#F5D565]",
    iconColor: "bg-[#E9A23B]",
    iconImage: timeIcon,
  },
  WONT_DO: {
    cardColor: "bg-[#F7D4D3]",
    iconColor: "bg-[#DD524C]",
    iconImage: closeIcon,
  },
  BLANK: {
    cardColor: "bg-[#E3E8EF]",
    iconColor: "",
    iconImage: "",
  },
} as const;

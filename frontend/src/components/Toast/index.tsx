import { type FC, useEffect } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  onClose: (id: string) => void;
}

export const Toast: FC<ToastProps> = ({ id, message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 4000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  const bgColor = {
    success: "bg-[#32D657]",
    error: "bg-[#DD524C]",
    info: "bg-[#3662E3]",
  }[type];

  return (
    <div
      className={`${bgColor} text-white px-6 py-4 rounded-xl shadow-lg min-w-[300px] max-w-md animate-slideIn`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="flex-1">{message}</p>
        <button
          onClick={() => onClose(id)}
          className="text-white hover:opacity-70 transition text-xl leading-none"
        >
          ×
        </button>
      </div>
    </div>
  );
};

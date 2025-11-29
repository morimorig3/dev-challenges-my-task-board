import type { FC } from "react";

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  isOpen,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-[#00000033] z-50"
        onClick={onCancel}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-lg z-50 max-w-md w-full mx-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-[#97A3B6] mb-6">{message}</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-6 py-2 border border-[#E3E8EF] rounded-full hover:bg-[#F5F5F5] transition interactive-element"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-[#DD524C] text-white rounded-full hover:bg-[#C74740] transition interactive-element"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </>
  );
};

import { type FC, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import closeIcon from "@/assets/close_ring_duotone-1.svg";
import checkIcon from "@/assets/Done_round.svg";

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (title: string, description: string) => void;
}

interface FormInput {
  title: string;
  description: string;
}

export const CreateTaskModal: FC<CreateTaskModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const titleInputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInput>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      reset({ title: "", description: "" });
      setTimeout(() => titleInputRef.current?.focus(), 100);
    }
  }, [isOpen, reset]);

  const onSubmit = (data: FormInput) => {
    onCreate(data.title, data.description);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-[#00000033] z-40"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-7 shadow-lg z-50 max-w-md w-full mx-4">
        <header className="flex justify-between items-center mb-6">
          <p className="font-semibold text-lg">Create New Task</p>
          <button
            onClick={onClose}
            className="border border-[#E3E8EF] grid place-items-center w-9 h-9 rounded-lg interactive-element"
          >
            <img src={closeIcon} alt="close" />
          </button>
        </header>

        <form id="create-task-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
          <div>
            <label className="text-[#97A3B6] text-xs mb-1 block">
              Task name <span className="text-red-500">*</span>
            </label>
            <input
              ref={titleInputRef}
              type="text"
              maxLength={50}
              placeholder="Enter a task name"
              className="px-3 py-2 border border-[#97A3B6] w-full rounded-md outline-[#3662E3] placeholder-[#97A3B6]"
              {...register("title", {
                required: "Task name is required",
                minLength: { value: 1, message: "Task name must be at least 1 character" }
              })}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="text-[#97A3B6] text-xs mb-1 block">Description</label>
            <textarea
              maxLength={255}
              placeholder="Enter a short description"
              className="px-3 py-2 border border-[#97A3B6] w-full rounded-md outline-[#3662E3] placeholder-[#97A3B6] min-h-24"
              {...register("description")}
            />
          </div>
        </form>

        <footer className="mt-6 flex gap-x-4 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border border-[#E3E8EF] rounded-full hover:bg-[#F5F5F5] transition interactive-element"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="create-task-form"
            className="px-6 py-2 bg-[#3662E3] text-white rounded-full hover:bg-[#2952CC] transition inline-flex items-center gap-2 interactive-element"
          >
            Create
            <img src={checkIcon} alt="create" />
          </button>
        </footer>
      </div>
    </>
  );
};

import { type FC, useEffect, useState } from "react";
import closeIcon from "@/assets/close_ring_duotone-1.svg";
import trashIcon from "@/assets/Trash.svg";
import checkIcon from "@/assets/Done_round.svg";
import { StatusButton } from "../StatusButton";
import { IconButton } from "../IconButton";
import { ConfirmDialog } from "../ConfirmDialog";
import type { Task } from "@backend/types";
import { useForm, type UseFormRegister } from "react-hook-form";
import type { TaskIconsProps } from "../TaskIcon";
import type { CARD_TYPE_COLOR_MAP } from "@/constants/indes";
import { deleteTask, updateTask } from "@/api/task";

const LABEL_CLASS = "text-[#97A3B6] text-xs mb-1";
const INPUT_CLASS =
  "px-3 py-2 border border-[#97A3B6] w-full rounded-md outline-[#3662E3] placeholder-[#97A3B6]";
const BUTTON_CLASS =
  "w-28 h-9 text-sm text-white inline-flex items-center justify-center gap-1 rounded-full interactive-element";
interface TaskDetailsCardProps {
  task: Task | undefined;
  onClickClose: () => void;
  onUpdate?: (updatedTask: Task) => void;
  onDelete?: (taskId: string) => void;
}

interface Input {
  name: string;
  description: string;
  iconType: TaskIconsProps["iconType"];
  cardType: keyof typeof CARD_TYPE_COLOR_MAP;
}

export const TaskDetailsCard: FC<TaskDetailsCardProps> = ({
  task,
  onClickClose,
  onUpdate,
  onDelete,
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<Input>({
    defaultValues: {
      name: task?.title ?? "",
      description: task?.description ?? "",
      iconType: task?.iconType ?? "WORK",
      cardType: task?.status ?? "BLANK",
    },
  });

  const currentIconType = watch("iconType");
  const currentCardType = watch("cardType");

  useEffect(() => {
    if (task) {
      reset({
        name: task.title ?? "",
        description: task.description ?? "",
        iconType: task.iconType ?? "WORK",
        cardType: task.status ?? "BLANK",
      });
    }
  }, [task, reset]);

  const onSubmit = async (data: Input) => {
    if (!task?.id || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const updatedTask = await updateTask(
        task.id,
        data.name,
        data.description,
        data.iconType,
        data.cardType
      );

      if (updatedTask) {
        onUpdate?.(updatedTask);
        onClickClose();
      }
    } catch (error) {
      console.error("Failed to update task:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    if (!task?.id || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await deleteTask(task.id);
      onDelete?.(task.id);
      setShowDeleteConfirm(false);
      onClickClose();
    } catch (error) {
      console.error("Failed to delete task:", error);
      setShowDeleteConfirm(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col bg-white rounded-2xl px-7 py-5 h-full">
      <header className="flex justify-between items-center mb-6">
        <p className="font-semibold text-sm">Task Details</p>
        <button
          onClick={onClickClose}
          className="border border-[#E3E8EF] grid place-items-center w-9 h-9 rounded-lg interactive-element"
        >
          <img src={closeIcon} alt="close" />
        </button>
      </header>
      <form id="task-form" className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
        <InputTaskName register={register} errors={errors} />
        <InputTaskDescription register={register} />
        <IconList currentIconType={currentIconType} setValue={setValue} />
        <StatusList currentCardType={currentCardType} setValue={setValue} />
      </form>
      <footer className="mt-auto flex gap-x-4 justify-end">
        <button
          type="button"
          onClick={handleDeleteClick}
          disabled={isSubmitting}
          className={`${BUTTON_CLASS} bg-[#97A3B6] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Delete
          <img src={trashIcon} />
        </button>
        <button
          type="submit"
          form="task-form"
          disabled={isSubmitting}
          className={`${BUTTON_CLASS} bg-[#3662E3] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Saving...' : 'Save'}
          <img src={checkIcon} />
        </button>
      </footer>
      <ConfirmDialog
        isOpen={showDeleteConfirm}
        title="Delete Task"
        message="Are you sure you want to delete this task? This action cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={confirmDelete}
        onCancel={() => setShowDeleteConfirm(false)}
      />
    </div>
  );
};

const InputTaskName = ({
  register,
  errors,
}: {
  register: UseFormRegister<Input>;
  errors: any;
}) => {
  return (
    <div>
      <p className={LABEL_CLASS}>Task name <span className="text-red-500">*</span></p>
      <input
        className={INPUT_CLASS}
        type="text"
        maxLength={50}
        placeholder="Enter a task name"
        {...register("name", {
          required: "Task name is required",
          minLength: { value: 1, message: "Task name must be at least 1 character" }
        })}
      />
      {errors.name && (
        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
      )}
    </div>
  );
};

const InputTaskDescription = ({
  register,
}: {
  register: UseFormRegister<Input>;
}) => {
  return (
    <div>
      <p className={LABEL_CLASS}>Description</p>
      <textarea
        className={`${INPUT_CLASS} min-h-32`}
        maxLength={255}
        placeholder="Enter a short description"
        {...register("description")}
      />
    </div>
  );
};

const IconList = ({
  currentIconType,
  setValue,
}: {
  currentIconType: TaskIconsProps["iconType"];
  setValue: (name: "iconType", value: TaskIconsProps["iconType"]) => void;
}) => {
  return (
    <div>
      <p className={LABEL_CLASS}>Icon</p>
      <ul className="flex gap-x-3">
        <li>
          <IconButton
            iconType="WORK"
            isSelected={currentIconType === "WORK"}
            onClick={() => setValue("iconType", "WORK")}
          />
        </li>
        <li>
          <IconButton
            iconType="MEETING"
            isSelected={currentIconType === "MEETING"}
            onClick={() => setValue("iconType", "MEETING")}
          />
        </li>
        <li>
          <IconButton
            iconType="COFFEE"
            isSelected={currentIconType === "COFFEE"}
            onClick={() => setValue("iconType", "COFFEE")}
          />
        </li>
        <li>
          <IconButton
            iconType="TRAINING"
            isSelected={currentIconType === "TRAINING"}
            onClick={() => setValue("iconType", "TRAINING")}
          />
        </li>
        <li>
          <IconButton
            iconType="BOOK"
            isSelected={currentIconType === "BOOK"}
            onClick={() => setValue("iconType", "BOOK")}
          />
        </li>
        <li>
          <IconButton
            iconType="WATCH"
            isSelected={currentIconType === "WATCH"}
            onClick={() => setValue("iconType", "WATCH")}
          />
        </li>
      </ul>
    </div>
  );
};

const StatusList = ({
  currentCardType,
  setValue,
}: {
  currentCardType: keyof typeof CARD_TYPE_COLOR_MAP;
  setValue: (name: "cardType", value: keyof typeof CARD_TYPE_COLOR_MAP) => void;
}) => {
  return (
    <div>
      <p className={LABEL_CLASS}>Status</p>
      <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
        <li>
          <StatusButton
            buttonType="blank"
            isSelected={currentCardType === "BLANK"}
            onClick={() => setValue("cardType", "BLANK")}
          />
        </li>
        <li>
          <StatusButton
            buttonType="inProgress"
            isSelected={currentCardType === "IN_PROGRESS"}
            onClick={() => setValue("cardType", "IN_PROGRESS")}
          />
        </li>
        <li>
          <StatusButton
            buttonType="completed"
            isSelected={currentCardType === "COMPLETED"}
            onClick={() => setValue("cardType", "COMPLETED")}
          />
        </li>
        <li>
          <StatusButton
            buttonType="wontDo"
            isSelected={currentCardType === "WONT_DO"}
            onClick={() => setValue("cardType", "WONT_DO")}
          />
        </li>
      </ul>
    </div>
  );
};

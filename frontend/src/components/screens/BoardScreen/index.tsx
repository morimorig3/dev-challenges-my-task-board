import { getBoard, updateBoard } from "@/api/board";
import { createTask } from "@/api/task";
import { AddTaskCard } from "@/components/AddTaskCard";
import { Header } from "@/components/Header";
import { TaskCard } from "@/components/TaskCard";
import { TaskDetailsCard } from "@/components/TaskDetailsCard";
import { CreateTaskModal } from "@/components/CreateTaskModal";
import { useToast } from "@/contexts/ToastContext";
import type { BoardWithTasks, Task } from "@backend/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const BoardScreen = () => {
  const [title, setTitle] = useState("My Task Board");
  const [description, setDescription] = useState("");
  const [board, setBoard] = useState<BoardWithTasks>();
  const [isShowDetails, setIsShowDetail] = useState(false);
  const [isShowCreateModal, setIsShowCreateModal] = useState(false);
  const [taskDetail, setTaskDetail] = useState<Task>();
  const { boardId } = useParams();
  const { showError, showSuccess } = useToast();

  const handleClickAddTask = () => {
    setIsShowCreateModal(true);
  };

  const handleCreateTask = async (taskTitle: string, taskDescription: string) => {
    if (!boardId) return;

    try {
      const newTask = await createTask(boardId, taskTitle, taskDescription);
      if (newTask) {
        setBoard((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            tasks: [...prev.tasks, newTask],
          };
        });
        showSuccess("Task created successfully!");
      }
    } catch (error) {
      showError("Failed to create task. Please try again.");
    }
  };

  const handleClickTask = (task: Task) => {
    setIsShowDetail(true);
    setTaskDetail(task);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setBoard((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        tasks: prev.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      };
    });
    showSuccess("Task updated successfully!");
  };

  const handleDeleteTask = (taskId: string) => {
    setBoard((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== taskId),
      };
    });
    showSuccess("Task deleted successfully!");
  };

  const handleUpdateTitle = async (newTitle: string) => {
    if (!boardId || !board) return;
    try {
      const updatedBoard = await updateBoard(boardId, newTitle, board.description);
      if (updatedBoard) {
        setTitle(updatedBoard.name);
        setBoard(updatedBoard);
        showSuccess("Board title updated!");
      }
    } catch (error) {
      showError("Failed to update board title.");
    }
  };

  const handleUpdateDescription = async (newDescription: string) => {
    if (!boardId || !board) return;
    try {
      const updatedBoard = await updateBoard(boardId, board.name, newDescription);
      if (updatedBoard) {
        setDescription(updatedBoard.description);
        setBoard(updatedBoard);
        showSuccess("Board description updated!");
      }
    } catch (error) {
      showError("Failed to update board description.");
    }
  };

  useEffect(() => {
    if (!boardId) return;
    getBoard(boardId).then((data) => {
      setBoard(data);
      setTitle(data?.name ?? "");
      setDescription(data?.description ?? "");
    });
  }, [boardId]);
  return (
    <div className="font-[Outfit] px-10 py-14">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <Header
            title={title}
            description={description}
            onUpdateTitle={handleUpdateTitle}
            onUpdateDescription={handleUpdateDescription}
          />
        </div>
        <main className="flex flex-col gap-y-6">
          {board?.tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description ?? undefined}
              cardType={task.status}
              iconType={task.iconType}
              onClick={() => handleClickTask(task)}
            />
          ))}
          <AddTaskCard onClick={handleClickAddTask} />
        </main>
      </div>
      <div
        className={`w-screen h-screen fixed inset-0 bg-[#00000033] transition duration-300 ${
          isShowDetails ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsShowDetail(false)}
      />
      <div
        onClick={(event) => event.stopPropagation()}
        className={`min-w-2xl h-[calc(100vh-40px)] fixed top-1/2 right-5 -translate-y-1/2 transition duration-300 ${
          isShowDetails
            ? "translate-x-0 opacity-100"
            : "opacity-0 translate-x-[calc(100%+20px)]"
        }`}
      >
        <TaskDetailsCard
          task={taskDetail}
          onClickClose={() => setIsShowDetail(false)}
          onUpdate={handleUpdateTask}
          onDelete={handleDeleteTask}
        />
      </div>
      <CreateTaskModal
        isOpen={isShowCreateModal}
        onClose={() => setIsShowCreateModal(false)}
        onCreate={handleCreateTask}
      />
    </div>
  );
};

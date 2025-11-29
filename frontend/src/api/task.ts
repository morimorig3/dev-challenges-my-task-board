import { type Task } from "@backend/types";
import { apiClient } from "./client";

export const deleteTask = async (id: string) => {
  try {
    return await apiClient.delete<void>(`/api/tasks/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const updateTask = async (
  id: string,
  title: string,
  description: string,
  iconType: Task["iconType"],
  status: Task["status"]
) => {
  try {
    return await apiClient.patch<Task>(`/api/tasks/${id}`, {
      title,
      description,
      iconType,
      status,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createTask = async (
  boardId: string,
  title: string,
  description: string
) => {
  try {
    return await apiClient.post<Task>(`/api/tasks`, {
      title,
      description,
      status: "BLANK",
      iconType: "WORK",
      boardId,
    });
  } catch (error) {
    console.error(error);
  }
};

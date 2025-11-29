import { type BoardWithTasks } from "../../../backend/src/types";
import { apiClient } from "./client";

export const getBoard = async (id: string) => {
  try {
    return await apiClient.get<BoardWithTasks>(`/api/boards/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const updateBoard = async (
  id: string,
  name: string,
  description: string
) => {
  try {
    return await apiClient.patch<BoardWithTasks>(`/api/boards/${id}`, {
      name,
      description,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createBoard = async (name: string, description: string) => {
  try {
    return await apiClient.post<BoardWithTasks>(`/api/boards`, {
      name,
      description,
    });
  } catch (error) {
    console.error(error);
  }
};

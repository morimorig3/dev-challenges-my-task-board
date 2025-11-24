import { Injectable, NotFoundException } from '@nestjs/common';
import { IconType, Task, TaskStatus } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTask(
    title: string,
    status: TaskStatus,
    description: string,
    iconType: IconType,
    boardId: string,
  ): Promise<Task> {
    return this.prismaService.task.create({
      data: {
        title,
        description,
        status,
        iconType,
        boardId: Number(boardId),
      },
    });
  }

  async updateTask(
    id: string,
    title: string,
    status: TaskStatus,
    description: string,
    iconType: IconType,
  ): Promise<Task> {
    try {
      return this.prismaService.task.update({
        where: { id: Number(id) },
        data: {
          title,
          status,
          description,
          iconType,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Task not found');
      }
      throw error;
    }
  }

  async deleteTask(id: string): Promise<void> {
    try {
      await this.prismaService.task.delete({
        where: { id: Number(id) },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Task not found');
      }
      throw error;
    }
  }
}

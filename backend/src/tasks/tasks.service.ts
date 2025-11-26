import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './schemas/create-task.schema';
import { UpdateTaskDto } from './schemas/update-task.schema';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.prismaService.task.create({
      data: createTaskDto,
    });
  }

  async updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    try {
      return this.prismaService.task.update({
        where: { id },
        data: updateTaskDto,
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
        where: { id },
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

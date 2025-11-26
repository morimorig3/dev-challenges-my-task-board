import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';
import { ZodValidatorPipe } from 'src/common/pipes/zod-validator/zod-validator.pipe';
import z from 'zod';
import {
  type CreateTaskDto,
  createTaskSchema,
} from './schemas/create-task.schema';
import {
  type UpdateTaskDto,
  updateTaskSchema,
} from './schemas/update-task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(
    @Body(new ZodValidatorPipe(createTaskSchema)) createTaskDto: CreateTaskDto,
  ): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Put(':id')
  async updateTask(
    @Param('id', new ZodValidatorPipe(z.uuid())) id: string,
    @Body(new ZodValidatorPipe(updateTaskSchema)) updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  async deleteTask(
    @Param('id', new ZodValidatorPipe(z.uuid())) id: string,
  ): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}

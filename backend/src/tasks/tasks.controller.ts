import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { IconType, Task, TaskStatus } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(
    @Body('title') title: string,
    @Body('status') status: TaskStatus,
    @Body('description') description: string,
    @Body('iconType') iconType: IconType,
    @Body('boardId') boardId: string,
  ): Promise<Task> {
    return this.tasksService.createTask(
      title,
      status,
      description,
      iconType,
      boardId,
    );
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('status') status: TaskStatus,
    @Body('description') description: string,
    @Body('iconType') iconType: IconType,
  ): Promise<Task> {
    return this.tasksService.updateTask(
      id,
      title,
      status,
      description,
      iconType,
    );
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}

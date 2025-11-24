import { Injectable } from '@nestjs/common';
import { IconType, Task, TaskStatus } from '@prisma/client/edge';

@Injectable()
export class TasksService {
  getTasks(): Task[] {
    return [
      {
        title: 'Sample Task',
        description: 'This is a sample task description',
        status: TaskStatus.BLANK,
        iconType: IconType.WORK,
        id: 1,
        boardId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }
}

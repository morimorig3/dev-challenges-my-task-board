import { Prisma } from '@prisma/client';

export type { Board, Task } from '@prisma/client';
export type BoardWithTasks = Prisma.BoardGetPayload<{
  include: { tasks: true };
}>;

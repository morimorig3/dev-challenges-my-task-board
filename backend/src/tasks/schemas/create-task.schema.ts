import { IconType, Prisma, TaskStatus } from '@prisma/client';
import z from 'zod';

export const createTaskSchema = z.object({
  title: z.string().min(1).max(100),
  status: z.enum(TaskStatus),
  description: z.string().max(500).optional(),
  iconType: z.enum(IconType),
  boardId: z.uuid(),
}) satisfies z.ZodType<Prisma.TaskUncheckedCreateInput>;

export type CreateTaskDto = z.infer<typeof createTaskSchema>;

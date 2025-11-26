import { IconType, Prisma, TaskStatus } from '@prisma/client';
import z from 'zod';

export const updateTaskSchema = z.object({
  title: z.string().min(1).max(100).optional(),
  status: z.enum(TaskStatus).optional(),
  description: z.string().max(500).optional(),
  iconType: z.enum(IconType).optional(),
}) satisfies z.ZodType<Prisma.TaskUncheckedUpdateInput>;

export type UpdateTaskDto = z.infer<typeof updateTaskSchema>;

import { Prisma } from '@prisma/client';
import z from 'zod';

export const updateBoardSchema = z.object({
  name: z.string().min(1).max(50),
}) satisfies z.ZodType<Prisma.BoardUpdateInput>;

export type UpdateBoardDto = z.infer<typeof updateBoardSchema>;

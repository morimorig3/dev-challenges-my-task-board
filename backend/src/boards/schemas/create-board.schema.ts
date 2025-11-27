import { Prisma } from '@prisma/client';
import z from 'zod';

export const createBoardSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().max(255).optional(),
}) satisfies z.ZodType<Prisma.BoardCreateInput>;

export type CreateBoardDto = z.infer<typeof createBoardSchema>;

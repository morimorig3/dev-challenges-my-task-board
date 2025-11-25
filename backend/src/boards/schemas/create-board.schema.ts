import { Prisma } from '@prisma/client';
import z from 'zod';

export const createBoardSchema = z.object({
  name: z.string().min(1).max(50),
}) satisfies z.ZodType<Prisma.BoardCreateInput>;

export type CreateBoardDto = z.infer<typeof createBoardSchema>;

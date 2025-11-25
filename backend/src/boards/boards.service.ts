import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBoardDto } from './schemas/create-board.schema';
import { UpdateBoardDto } from './schemas/update-board.schema';

type BoardWithTasks = Prisma.BoardGetPayload<{
  include: { tasks: true };
}>;

@Injectable()
export class BoardsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getBoard(id: string): Promise<BoardWithTasks> {
    const board = await this.prismaService.board.findUnique({
      where: { id },
      include: { tasks: true },
    });
    if (!board) {
      throw new NotFoundException('Board not found');
    }
    return board;
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return await this.prismaService.board.create({
      data: createBoardDto,
    });
  }

  async updateBoard(
    id: string,
    updateBoardDto: UpdateBoardDto,
  ): Promise<Board> {
    try {
      return await this.prismaService.board.update({
        where: { id },
        data: updateBoardDto,
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Board not found');
      }
      throw error;
    }
  }

  async deleteBoard(id: string): Promise<void> {
    try {
      await this.prismaService.board.delete({
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Board not found');
      }
      throw error;
    }
  }
}

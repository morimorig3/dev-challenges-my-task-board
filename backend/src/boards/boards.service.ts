import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoardsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getBoard(id: string): Promise<Board> {
    const board = await this.prismaService.board.findUnique({
      where: { id: Number(id) },
    });
    if (!board) {
      throw new NotFoundException('Board not found');
    }
    return board;
  }

  async createBoard(name: string): Promise<Board> {
    return await this.prismaService.board.create({
      data: {
        name,
      },
    });
  }

  async updateBoard(id: string, name: string): Promise<Board> {
    try {
      return await this.prismaService.board.update({
        where: { id: Number(id) },
        data: { name },
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
        where: { id: Number(id) },
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

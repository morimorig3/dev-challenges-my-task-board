import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoardsService {
  constructor(private readonly prismaServide: PrismaService) {}

  async getBoard(id: string): Promise<Board> {
    const board = await this.prismaServide.board.findUnique({
      where: { id: Number(id) },
    });
    if (!board) {
      throw new NotFoundException('Board not found');
    }
    return board;
  }

  async createBoard(name: string): Promise<Board> {
    return await this.prismaServide.board.create({
      data: {
        name,
      },
    });
  }
}

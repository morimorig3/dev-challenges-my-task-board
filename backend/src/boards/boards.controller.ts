import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, Prisma } from '@prisma/client';

type BoardWithTasks = Prisma.BoardGetPayload<{
  include: { tasks: true };
}>;

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get(':id')
  async getBoard(@Param('id') id: string): Promise<BoardWithTasks> {
    return await this.boardsService.getBoard(id);
  }

  @Post()
  async createBoard(@Body('name') name: string): Promise<Board> {
    return await this.boardsService.createBoard(name);
  }

  @Put(':id')
  async updateBoard(
    @Param('id') id: string,
    @Body('name') name: string,
  ): Promise<Board> {
    return await this.boardsService.updateBoard(id, name);
  }

  @Delete(':id')
  async deleteBoard(@Param('id') id: string): Promise<void> {
    return await this.boardsService.deleteBoard(id);
  }
}

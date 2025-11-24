import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from '@prisma/client';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get(':id')
  async getBoard(@Param('id') id: string): Promise<Board> {
    return await this.boardsService.getBoard(id);
  }

  @Post()
  async createBoard(@Body() body: { name: string }): Promise<Board> {
    return await this.boardsService.createBoard(body.name);
  }
}

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
import { ZodValidatorPipe } from 'src/common/pipes/zod-validator/zod-validator.pipe';
import {
  type CreateBoardDto,
  createBoardSchema,
} from './schemas/create-board.schema';
import z from 'zod';
import {
  type UpdateBoardDto,
  updateBoardSchema,
} from './schemas/update-board.schema';

type BoardWithTasks = Prisma.BoardGetPayload<{
  include: { tasks: true };
}>;

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get(':id')
  async getBoard(
    @Param('id', new ZodValidatorPipe(z.uuid())) id: string,
  ): Promise<BoardWithTasks> {
    return await this.boardsService.getBoard(id);
  }

  @Post()
  async createBoard(
    @Body(new ZodValidatorPipe(createBoardSchema))
    createBoardDto: CreateBoardDto,
  ): Promise<Board> {
    return await this.boardsService.createBoard(createBoardDto);
  }

  @Put(':id')
  async updateBoard(
    @Param('id', new ZodValidatorPipe(z.uuid())) id: string,
    @Body(new ZodValidatorPipe(updateBoardSchema))
    updateBoardDto: UpdateBoardDto,
  ): Promise<Board> {
    return await this.boardsService.updateBoard(id, updateBoardDto);
  }

  @Delete(':id')
  async deleteBoard(
    @Param('id', new ZodValidatorPipe(z.uuid())) id: string,
  ): Promise<void> {
    return await this.boardsService.deleteBoard(id);
  }
}

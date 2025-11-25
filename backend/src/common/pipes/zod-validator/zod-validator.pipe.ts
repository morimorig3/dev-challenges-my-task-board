import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import z from 'zod';

@Injectable()
export class ZodValidatorPipe implements PipeTransform {
  constructor(private schema: z.ZodType) {}

  transform(value: unknown) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        throw new BadRequestException({
          message: 'Validation failed',
          errors: error.issues,
        });
      }
      throw new BadRequestException('Validation failed');
    }
  }
}

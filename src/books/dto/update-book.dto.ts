import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsOptional } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @IsOptional()
  title?: string;

  @IsOptional()
  author?: string;

  @IsOptional()
  year?: number;

  @IsOptional()
  isRead?: boolean;
}

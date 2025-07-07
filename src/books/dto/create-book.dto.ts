import { IsString, IsInt, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsInt()
  year: number;

  @IsBoolean()
  isRead?: boolean = false;
}

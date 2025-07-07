import { IsString, IsInt, IsBoolean, IsNotEmpty } from 'class-validator';
export class UpdateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsInt()
  year: number;

  @IsBoolean()
  isRead?: boolean;
}

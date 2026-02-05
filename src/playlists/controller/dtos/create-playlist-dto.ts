import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePlaylistDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
import { IsString, IsOptional } from 'class-validator';

export class UpdatePlaylistDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;
}
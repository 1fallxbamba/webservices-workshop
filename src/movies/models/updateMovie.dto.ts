import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class UpdateMovieDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    description: 'New name of a movie',
    example: 'Inception',
  })
  name: string;
  @IsString()
  @ApiProperty({
    required: false,
    description: 'New name of the director of the movie',
    example: 'Christopher Nolan',
  })
  director: string;
  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear())
  @ApiProperty({
    required: false,
    description: 'New release date of the movie',
    minimum: 1900,
    maximum: new Date().getFullYear(),
    example: 2015,
  })
  releaseYear: number;
}

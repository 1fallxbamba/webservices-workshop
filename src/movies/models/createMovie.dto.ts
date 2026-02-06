import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateMovieDTO {
  @IsNumber()
  @ApiProperty({
    required: true,
    description: 'The unique identifier of the user being created',
    example: 7,
  })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'The name of a movie',
    example: 'Inception',
  })
  name: string;
  @IsString()
  @ApiProperty({
    required: true,
    description: 'The name of the director of the movie',
    example: 'Christopher Nolan',
  })
  director: string;
  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear())
  @ApiProperty({
    required: true,
    description: 'Release date of the movie',
    minimum: 1900,
    maximum: new Date().getFullYear(),
    example: 2015,
  })
  releaseYear: number;
}

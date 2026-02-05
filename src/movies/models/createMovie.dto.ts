import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateMovieDTO {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNumber()
  id: number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  director: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNumber()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Min(1900)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Max(new Date().getFullYear())
  releaseYear: number;
}

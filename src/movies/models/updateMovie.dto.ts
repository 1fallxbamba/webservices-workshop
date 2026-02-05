import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateMovieDTO {
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
  releaseYear: number;
}

import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserDTO {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNumber()
  id: number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEmail()
  email: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsPhoneNumber()
  phone: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  role: string;
}

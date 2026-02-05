/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  readonly id?: number;
  @IsNotEmpty()
  readonly username: string;
  @IsEmail()
  readonly email: string;
  readonly password?: string;
  readonly role: string;
}
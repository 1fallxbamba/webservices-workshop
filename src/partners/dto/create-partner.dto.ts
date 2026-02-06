import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreatePartnerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  website: string;
}

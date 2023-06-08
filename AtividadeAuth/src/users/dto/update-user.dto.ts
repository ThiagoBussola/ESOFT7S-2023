import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, MaxLength, MinLength, isNumber } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  name: string;
  age: number;
  @IsEmail()
  email: string;
  @MinLength(8)
  @MaxLength(22)
  password: string;
}

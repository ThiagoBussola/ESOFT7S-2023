import { IsEmail, Max, MaxLength, MinLength, isNumber } from 'class-validator';
export class CreateUserDto {
  name: string;
  @Max(100)
  age: number;
  @IsEmail()
  email: string;
  @MinLength(8)
  @MaxLength(22)
  password: string;
}

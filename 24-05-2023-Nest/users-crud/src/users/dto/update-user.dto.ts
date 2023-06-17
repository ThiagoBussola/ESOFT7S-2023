import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength,  } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    name: string;
  
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password: string
  
    @IsNumber()
    @Max(100)
    age: number;

}

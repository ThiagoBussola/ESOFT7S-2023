import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class LoginUserDto {
    @IsEmail()
    usermail: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password: string;
}
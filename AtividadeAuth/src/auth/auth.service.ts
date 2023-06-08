import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username, pass) {
    const userMail = await this.usersService.findByEmail(username);
    if (userMail) {
      const checkPass = await compare(pass, userMail.password);

      const payload = { sub: pass, username: userMail.name };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }

    throw new UnauthorizedException();
  }
}

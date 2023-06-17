import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,  private jwtService: JwtService) {}

  async signIn(userMail: string, pass: string): Promise<any> {
    const user = await this.usersService.findUser(userMail);


    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) throw new UnauthorizedException();

    const payload = { sub: user._id, userMail: user.email };
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return {
        access_token: await this.jwtService.signAsync(payload),
      };
  }
}
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';


export type UserType = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async create(createUserDto: CreateUserDto) {
   


    createUserDto.password = await this.userHash(createUserDto.password)


    this.userModel.create(createUserDto);
  }

  findAll() {
    const findedUsers = this.userModel.find().select("-password");
    return findedUsers;
  }

  findOne(email: string) {
    const findedUser = this.userModel.findOne({email: email}).select("-password");
    return findedUser;
  }

  findUser(email: string) {
    const findedUser = this.userModel.findOne({email: email});
    return findedUser;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = this.userModel.findByIdAndUpdate(
      id,
      {
        name: updateUserDto.name,
        password: updateUserDto.password,
        age: updateUserDto.age,
        email: updateUserDto.email,
      },
      { new: true },
    ).select("-password");

    return updatedUser;
  }

  remove(id: string) {
    const deletedUser = this.userModel.findByIdAndDelete(id).select("-password");

    return deletedUser;
  }

  private async userHash(pass) {
    const saltOrRounds = 10;

    const hashedPass = await bcrypt.hash(pass, saltOrRounds);
    return hashedPass
  }
}

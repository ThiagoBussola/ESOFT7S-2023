import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const emailExists = await this.checkEmailExists(createUserDto.email);
    if (emailExists) {
      throw new Error('Email already exists');
    }
    createUserDto.password = await this.hashPassword(createUserDto.password);
    await this.userModel.create(createUserDto);
    //return emailExists
  }

  findAll() {
    const findedUsers = this.userModel.find().select('-password');
    return findedUsers;
  }

  findOne(id: string) {
    const findedUser = this.userModel.findById(id).select('-password');
    return findedUser;
  }

  findByEmail(email: string) {
    const findedUser = this.userModel.findOne({ email: email });
    return findedUser;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = this.userModel
      .findByIdAndUpdate(
        id,
        {
          name: updateUserDto.name,
          age: updateUserDto.age,
          email: updateUserDto.email,
        },
        { new: true },
      )
      .select('-password');

    return updatedUser;
  }

  remove(id: string) {
    const deletedUser = this.userModel
      .findByIdAndDelete(id)
      .select('-password');
    return deletedUser;
  }

  private async hashPassword(password: string) {
    const saltRounds = 10;
    const myPlaintextPassword = password;
    const salt = await hash(myPlaintextPassword, saltRounds);
    return salt;
  }

  private async checkEmailExists(email: string) {
    const existingUser = await this.userModel.exists({ email });
    return existingUser;
  }
}

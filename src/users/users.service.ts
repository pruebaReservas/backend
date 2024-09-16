import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect()
    console.log('database conected');
  }

  async create(createUserDto: CreateUserDto) {
    const passwordEncripted = await this.encrypt(createUserDto.password);
    return this.users.create({

      data: {
        ...createUserDto,
        password: passwordEncripted
      }
    });
  }

  findAll() {
    return this.users.findMany({});
  }

  findOne(id: number) {
    return this.users.findFirst({
      where:{
        id
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.users.update({
      where:{
        id
      },
      data: updateUserDto
    });
  }

  remove(id: number) {
    return this.users.delete({
      where:{
        id
      }
    })
  }

  async encrypt(value: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(value, saltOrRounds);
    return hash
  }
}

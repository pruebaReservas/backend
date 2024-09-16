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

  getReservations(user_id: number) {
    return this.reservations.findMany({
      where: { id_users: user_id },
      include: {
        room: {
          select: {
            name: true
          }
        },  // Incluye la información de la habitación asociada
        user: {
          select: {
            name: true,
            last_name: true
          }
        }, // Incluye la información del usuario asociado
      },
    });
  }
  
  async encrypt(value: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(value, saltOrRounds);
    return hash
  }
}

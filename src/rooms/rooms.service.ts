import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService extends PrismaClient implements OnModuleInit {

  onModuleInit() {
    this.$connect()
    console.log('database conected');
  }

  create(createRoomDto: CreateRoomDto) {
    return this.rooms.create({
      data: createRoomDto
    })
  }

  findAll() {
    return this.rooms.findMany({});
  }

  findOne(id: number) {
    return this.rooms.findFirst({
      where: {
        id
      }
    })
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return this.rooms.update({
  where: {id},
  data: updateRoomDto
})
  }

  remove(id: number) {
    return this.rooms.delete({
      where:{
        id
      }
    })
  }
}

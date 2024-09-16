import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
      this.$connect()
      console.log('database conected');
  }
  create(createReservationDto: CreateReservationDto) {
    return this.reservations.create({
      data: createReservationDto
    });
  }

  findAll() {
    return this.reservations.findMany({});
  }

  findOne(id: number) {
    return this.reservations.findFirst({
      where:{id}
    });
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return this.reservations.update({
      where:{id},
      data: updateReservationDto
    });
  }

  remove(id: number) {
    return this.reservations.delete({
      where:{id}
    });
  }
}

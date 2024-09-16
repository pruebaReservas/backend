import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { UsersModule } from './users/users.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [RoomsModule, UsersModule, ReservationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

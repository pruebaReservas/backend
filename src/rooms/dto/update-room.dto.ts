import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateRoomDto } from './create-room.dto';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {
    @IsString()
    public name: string;

    @IsString()
    public description: string;
}

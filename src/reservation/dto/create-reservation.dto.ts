import { Type } from "class-transformer";
import { IsDate, IsInt } from "class-validator";

export class CreateReservationDto {
    @IsInt()
    public id_users: number;
    
    @IsInt()
    public id_rooms: number
    
    @Type(() => Date)
    @IsDate()
    public start_date: Date;

    @Type(() => Date)
    @IsDate()
    public end_date: Date
}

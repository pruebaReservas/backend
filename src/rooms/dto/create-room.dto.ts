import { IsString } from "class-validator";

export class CreateRoomDto {
    @IsString()
    public name: string;

    @IsString()
    public description: string;
}

import { IsEmail, IsString, IsStrongPassword} from "class-validator";

export class CreateUserDto {
    @IsString()
    public name: string;
    
    @IsString()
    public last_name: string;

    @IsStrongPassword()
    public password: string;

    @IsEmail()
    public email: string;
}

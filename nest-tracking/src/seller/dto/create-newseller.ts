import { IsNotEmpty } from "class-validator";

export class createseller{
    @IsNotEmpty()
    location: string;

    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    nearby: string;
}
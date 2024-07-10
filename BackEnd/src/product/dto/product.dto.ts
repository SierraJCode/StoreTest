import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDTO {

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;

    @IsString()
    @IsNotEmpty()
    readonly img: string

    @IsDate()
    @IsNotEmpty()
    readonly createAt: Date;
}
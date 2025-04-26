import { IsArray, IsDate, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class CaracteristicaDTO {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;
}

class ImagemDTO {
    @IsString()
    @IsNotEmpty()
    url: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;
}

export class DadosProdutoDTO {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsNumber()
    valor: number;

    @IsNumber()
    quantidadeDisponivel: number;

    @IsString()
    @IsNotEmpty()
    descricao: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CaracteristicaDTO)
    caracteristicas: CaracteristicaDTO[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImagemDTO)
    imagens: ImagemDTO[];

    @IsString()
    @IsNotEmpty()
    categoria: string;

    @IsDate()
    @Type(() => Date)
    dataCriacao: Date;

    @IsDate()
    @Type(() => Date)
    dataAtualizacao: Date;
}
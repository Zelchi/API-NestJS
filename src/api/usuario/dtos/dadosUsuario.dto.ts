import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { isEmailRegistered } from "../validations/validarEmail";

export class DadosUsuarioDTO { 
    @IsString({ message: 'O nome deve ser uma string' })
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    nome: string;
    @IsEmail(undefined, { message: 'O email deve ser um email válido' })
    @isEmailRegistered({ message: 'O email já está cadastrado' })
    email: string;
    @IsString({ message: 'A senha deve ser uma string' })
    @IsStrongPassword(undefined, { message: 'Senha fraca' })
    senha: string;
}
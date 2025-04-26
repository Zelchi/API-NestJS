import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class DadosUsuarioDTO {
    @IsNotEmpty({
        message: 'O nome não pode ser vazio'
    })
    nome: string;
    @IsEmail(undefined, {
        message: 'O email deve ser um email válido'
    })
    email: string;
    @IsStrongPassword(undefined, {
        message: 'A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial'
    })
    senha: string;
}
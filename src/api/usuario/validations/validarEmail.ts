import { ValidatorConstraintInterface, ValidatorConstraint, ValidationOptions, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class RegisteredEmailValidation implements ValidatorConstraintInterface {

    private repository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository) {
        this.repository = usuarioRepository;
    }

    public validate = async (value: any): Promise<boolean> => {
        if (await this.repository.emailJaCadastrado(value)) {
            return false;
        } else {
            return true;
        }
    }
}

export const isEmailRegistered = (opcoes: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoes,
            constraints: [],
            validator: RegisteredEmailValidation,
        })
    }
}
import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioRepository } from './usuario/usuario.repository';
import { RegisteredEmailValidation } from './usuario/validations/validarEmail';

@Module({
    controllers: [UsuarioController],
    providers: [
        UsuarioRepository,
        RegisteredEmailValidation
    ],
})
export class UsuarioModule { }
import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioRepository } from './usuario/usuario.repository';
import { EmailRegistradoValidation } from './usuario/validation/emailValidation';

@Module({
    controllers: [UsuarioController],
    providers: [
        UsuarioRepository,
        EmailRegistradoValidation
    ],
})
export class UsuarioModule { }
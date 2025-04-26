import { Module } from '@nestjs/common';
import { UsuarioController } from './api/Usuario/usuarioController';

@Module({
    imports: [],
    controllers: [UsuarioController],
    providers: [],
})
export class AppModule { }

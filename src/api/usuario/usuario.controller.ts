import { Body, Controller, Get, Post } from '@nestjs/common';
import { dadosUsuario } from './usuario.type';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {

    private repository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository) {
        this.repository = usuarioRepository;
    };

    @Post('/')
    public async criaUsuario(@Body() dados: dadosUsuario) {
        this.repository.salvar(dados);
        return { status: 'Usuario criado com sucesso!' };
    }

    @Get('/')
    public async listarUsuarios() {
        return this.repository.listar();
    }

}   
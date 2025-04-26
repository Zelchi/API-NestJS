import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { DadosUsuarioDTO } from './usuario.type';

@Controller('/usuarios')
export class UsuarioController {

    private repository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository) {
        this.repository = usuarioRepository;
    };

    @Post('/')
    public async criaUsuario(@Body() dados: DadosUsuarioDTO) {
        this.repository.salvar(dados);
        return { status: 'Usuario criado com sucesso!' };
    }

    @Get('/')
    public async listarUsuarios() {
        return this.repository.listar();
    }

}   
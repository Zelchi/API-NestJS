import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { DadosUsuarioDTO } from './dtos/dadosUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class UsuarioController {

    private repository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository) {
        this.repository = usuarioRepository;
    };

    @Post('/')
    public async criaUsuario(@Body() dados: DadosUsuarioDTO): Promise<{ id: string, status: string }> {
        const userid = uuid();
        await this.repository.salvar(new UsuarioEntity(
            userid,
            dados.nome,
            dados.email,
            dados.senha
        ));
        return {
            id: userid,
            status: 'Usuario criado com sucesso!'
        };
    }

    @Get('/')
    public async listarUsuarios() {
        return this.repository.listarTodos();
    }
}
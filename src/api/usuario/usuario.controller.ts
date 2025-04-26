import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { DadosUsuarioDTO } from './dto/dadosUsuario';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class UsuarioController {

    private repository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository) {
        this.repository = usuarioRepository;
    };

    @Post('/')
    public async criaUsuario(@Body() dados: DadosUsuarioDTO): Promise<{ id: string }> {
        const userid = uuid();
        await this.repository.salvar(new UsuarioEntity(
            userid,
            dados.nome,
            dados.email,
            dados.senha
        ));
        return { id: userid };
    }

    @Get('/')
    public async listarUsuarios() {
        return this.repository.listar();
    }

}
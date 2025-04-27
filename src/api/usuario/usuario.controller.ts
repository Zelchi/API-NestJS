import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dtos/CriaUsuario.dto';
import { AtualizaUsuarioDTO } from './dtos/AtualizaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class UsuarioController {

    private repository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository) {
        this.repository = usuarioRepository;
    };

    @Post('/')
    public async criaUsuario(@Body() dados: CriaUsuarioDTO): Promise<{ id: string, status: string }> {
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

    @Put('/:id')
    public async atualizarUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO): Promise<{ usuario: string, status: string }> {
        const usuario = await this.repository.atualiza(id, novosDados);
        return { 
            usuario: usuario.id,
            status: 'Usuario atualizado com sucesso!' 
        };
    }

    @Delete('/:id')
    public async deletarUsuario(@Param('id') id: string): Promise<{ usuario: string, status: string }> {
        const usuario = await this.repository.deleta(id);
        return {
            usuario: usuario.id,
            status: 'Usuario deletado com sucesso!' 
        }
    } 
}
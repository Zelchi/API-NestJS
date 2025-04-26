import { Body, Controller, Post } from '@nestjs/common';
import { dadosUsuario } from './usuarioTypes';
import { UsuarioRepository } from './usuarioRepository';

@Controller('/usuarios')
export class UsuarioController {

    private usuarioRepository = new UsuarioRepository();

    @Post('/criar')
    public async criaUsuario(@Body() dados: dadosUsuario) {
        this.usuarioRepository.salvar(dados);
        return {status:'Usuario criado com sucesso!'};
    }

}
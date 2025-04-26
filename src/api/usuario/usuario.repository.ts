import { Injectable } from '@nestjs/common';
import { DadosUsuarioDTO } from './usuario.type';

@Injectable()
export class UsuarioRepository {
    private usuarios: DadosUsuarioDTO[] = [];

    public salvar = async (usuario: DadosUsuarioDTO) => {
        this.usuarios.push(usuario);
        console.log('Usuarios salvos:', this.usuarios);
    }

    public listar = async () => {
        return this.usuarios;
    }
}
import { Injectable } from '@nestjs/common';
import { dadosUsuario } from './usuario.type';

@Injectable()
export class UsuarioRepository {
    private usuarios: dadosUsuario[] = [];

    public salvar = async (usuario: dadosUsuario) => {
        this.usuarios.push(usuario);
        console.log('Usuarios salvos:', this.usuarios);
    }

    public listar = async () => {
        return this.usuarios;
    }
}
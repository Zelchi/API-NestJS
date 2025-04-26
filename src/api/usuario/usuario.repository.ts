import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
    private usuarios: UsuarioEntity[] = [];

    public async salvar(usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
        console.log('Usuarios salvos:', this.usuarios);
    }

    public async listar() {
        return this.usuarios;
    }

    public async emailJaCadastrado(email: string): Promise<boolean> {
        const usuario = this.usuarios.find(usuario => usuario.email === email);
        return usuario ? true : false;
    }
}
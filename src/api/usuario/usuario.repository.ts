import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
    private usuarios: UsuarioEntity[] = [];

    public async salvar(usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
        console.log('Usuarios salvos:', this.usuarios);
    }

    private async buscaPorID (id: string): Promise<UsuarioEntity> {

        const usuario = this.usuarios.find(usuario => usuario.id === id);

        if (!usuario) throw new Error('Usuario não encontrado');

        return usuario;
    }

    public async listarTodos() {
        const listaUser: Array<{ id: string, nome: string }> = [];

        for (const usuario of this.usuarios) {
            listaUser.push({
                id: usuario.id,
                nome: usuario.nome
            });
        }

        return listaUser;
    };

    public async emailJaCadastrado(email: string): Promise<boolean> {
        const usuario = this.usuarios.find(usuario => usuario.email === email);
        return usuario ? true : false;
    }

    public async atualiza(id: string, novosDados: Partial<UsuarioEntity>): Promise<UsuarioEntity> {
        const usuario = this.buscaPorID(id);

        Object.entries(novosDados).forEach(([key, value]) => {
            if (key == 'id') return;
            if (key == 'dataCadastro') return;
            if (value) usuario[key] = value;
        });

        return usuario;
    }

    public async deleta(id: string): Promise<UsuarioEntity> {
        const usuario = this.buscaPorID(id);
        
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);

        return usuario;
    }
}
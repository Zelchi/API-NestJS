import { dadosUsuario } from './usuarioTypes';

export class UsuarioRepository {
    private usuarios: dadosUsuario[] = [];

    public salvar = async (usuario: dadosUsuario) => {
        this.usuarios.push(usuario);
        console.log('Usuarios salvos:', this.usuarios);
    }
}
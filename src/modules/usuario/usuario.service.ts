import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

    private readonly repository: Repository<UsuarioEntity>;

    constructor(@InjectRepository(UsuarioEntity) usuarioRepository: Repository<UsuarioEntity>) {
        this.repository = usuarioRepository;
    }

    async criaUsuario(usuarioEntity: UsuarioEntity) {
        await this.repository.save(usuarioEntity);
    }

    async listUsuarios() {
        const usuariosSalvos = await this.repository.find();
        const usuariosLista = usuariosSalvos.map(
            (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome),
        );
        return usuariosLista;
    }

    async buscaPorEmail(email: string) {
        const checkEmail = await this.repository.findOne({
            where: { email },
        });
        return checkEmail;
    }

    async atualizaUsuario(id: string, novosDados: AtualizaUsuarioDTO) {
        await this.repository.update(id, novosDados);
    }

    async deletaUsuario(id: string) {
        const result = await this.repository.delete(id);
        if (result.affected === 0) {
            throw new Error('Usuário não encontrado');
        }
        if (result.affected === 1) {
            return { message: 'Usuário deletado com sucesso' };
        }
        if ((result.affected ?? 0) > 1) {
            return { message: 'Mais de um usuário deletado' };
        }
        return { message: 'Nenhum usuário deletado' };
    }
}

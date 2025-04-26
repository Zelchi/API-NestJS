export class UsuarioEntity {
    public id: string;
    public nome: string;
    public email: string;
    public senha: string;
    public dataCadastro: Date;

    constructor(id: string, nome: string, email: string, senha: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dataCadastro = new Date();
    }
}
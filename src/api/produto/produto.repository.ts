import { Injectable } from "@nestjs/common";
import { DadosProdutoDTO } from "./produto.type";

@Injectable()
export class ProdutoRepository {
    private produtos: DadosProdutoDTO[] = [];
    
    public salvar = async (produto: DadosProdutoDTO) => {
        this.produtos.push(produto);
    };

    public listar = async () => {
        return this.produtos;
    };
}
import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.type";

@Injectable()
export class ProdutoRepository {
    private produtos: Produto[] = [];
    
    public salvar = async (produto: Produto) => {
        this.produtos.push(produto);
    };

    public listar = async () => {
        return this.produtos;
    };
}
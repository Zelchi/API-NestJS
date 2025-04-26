import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { Produto } from './produto.type';

@Controller('/produtos')
export class ProdutoController {

    private repository: ProdutoRepository;
    constructor(produtoRepository: ProdutoRepository) {
        this.repository = produtoRepository;
    };

    @Post('/')
    public async criaProduto(@Body() produto: Produto) {
        console.log(produto);
        this.repository.salvar(produto);
        return { status: 'Produto criado com sucesso!' };
    }

    @Get('/')
    public async listarProdutos() {
        return this.repository.listar();
    }

}
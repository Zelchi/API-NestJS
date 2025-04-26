import { Module } from '@nestjs/common';
import { ProdutoController } from './produto/produto.controller';
import { ProdutoRepository } from './produto/produto.repository';

@Module({
    controllers: [ProdutoController],
    providers: [ProdutoRepository],
})
export class ProdutoModule {}
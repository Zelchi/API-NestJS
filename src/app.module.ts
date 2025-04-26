import { Module } from '@nestjs/common';
import { UsuarioModule } from './api/usuario.module';
import { ProdutoModule } from './api/produto.module';

@Module({
    imports: [UsuarioModule, ProdutoModule],
})
export class AppModule {}
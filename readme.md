## 📘 Projeto de Estudo com NestJS

Este é um projeto desenvolvido com o objetivo de estudar o framework [NestJS](https://nestjs.com/), utilizando uma arquitetura moderna baseada em módulos, com integração ao banco de dados PostgreSQL via TypeORM. O projeto também utiliza boas práticas como validação, transformação de dados, testes automatizados e linting.

---

### 🚀 Tecnologias Utilizadas

* **[NestJS](https://nestjs.com/)** — Framework de Node.js para construção de aplicações escaláveis
* **TypeORM** — ORM para manipulação do banco de dados PostgreSQL
* **PostgreSQL** — Banco de dados relacional
* **UUID** — Geração de identificadores únicos
* **class-validator / class-transformer** — Validação e transformação de dados
* **Jest** — Testes unitários
* **Supertest** — Testes de integração HTTP
* **ESLint + Prettier** — Padronização e qualidade de código
* **SWC** — Transpiler rápido para TypeScript

---

### ⚙️ Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure as variáveis de ambiente:**

Crie um arquivo `.env` com as configurações do banco e outras:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=seu_usuario
DATABASE_PASSWORD=sua_senha
DATABASE_NAME=seu_banco
```

---

### 🧲 Testes

Para rodar os testes unitários:

```bash
npm run test
```

---

### 🛠️ Scripts úteis

* `start` — Inicia a aplicação
* `start:dev` — Inicia em modo de desenvolvimento com reload
* `test` — Executa os testes com Jest
* `lint` — Roda o linter
* `format` — Formata o código com Prettier

---

### 🏗️ Estrutura do Projeto (padrão NestJS)

```
src/
├── app.module.ts
├── main.ts
├── modules/
│   └── exemplo/
│       ├── exemplo.controller.ts
│       ├── exemplo.service.ts
│       ├── exemplo.module.ts
│       └── entities/
│           └── exemplo.entity.ts
```

---

### 📚 Aprendizados

Este projeto cobre:

* Criação de APIs REST com NestJS
* Configuração de banco de dados com TypeORM
* Validação e transformação de DTOs
* Boas práticas com ESLint e Prettier
* Testes automatizados com Jest e Supertest

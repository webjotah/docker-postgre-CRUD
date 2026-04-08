# Docker + Node + PostgreSQL + Sequelize (MVC)

API RESTful desenvolvida com Node.js, Express e Sequelize seguindo a arquitetura **MVC** (Model-View-Controller), com banco de dados PostgreSQL executando em Docker.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **PostgreSQL** - Banco de dados relacional
- **Sequelize** - ORM para Node.js
- **Docker & Docker Compose** - Containerização e orquestração
- **Sequelize CLI** - Ferramentas de migration e seeding

## 📋 Pré-requisitos

- Docker e Docker Compose instalados na máquina
- Node.js 18+ (apenas para desenvolvimento local sem Docker)
- npm ou yarn

## 🔧 Instalação e Setup

### 1. Clonar o repositório

```bash
git clone <seu-repositorio>
cd docker-postgre
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar banco de dados

O Docker Compose já está configurado. Inicie o PostgreSQL:

```bash
docker-compose up -d
```

Isso criará um container PostgreSQL com as seguintes credenciais:
- **Usuário:** postgres
- **Senha:** joao0102
- **Database:** testedb
- **Porta:** 5432

### 4. Executar migrations

```bash
npx sequelize db:migrate
```

Isso criará as tabelas necessárias no banco de dados (conforme definido em `src/database/migrations/`).

## 📁 Estrutura do Projeto (MVC)

```
src/
├── models/                    # Models (M) - Definição das entidades
│   └── Player.js
├── controllers/               # Controllers (C) - Lógica de negócio
│   └── userController.js
├── routes.js                  # Mapeamento de rotas
├── server.js                  # Configuração principal do servidor
├── config/
│   └── database.js            # Configuração do Sequelize
└── database/
    └── migrations/            # Migrations do banco de dados
        └── 20260406173232-create-players-table.js
```

### Camadas MVC

**Models** (src/models/)
- Define a estrutura das entidades do banco de dados
- Associações entre tabelas
- Validações de campos

**Controllers** (src/controllers/)
- Contém a lógica de negócio
- Processa requisições
- Coordena interação com Models

**Routes** (src/routes.js)
- Define os endpoints da API
- Associa rotas aos controllers

## ▶️ Executar o Projeto

### Com Docker Compose

```bash
# Iniciar PostgreSQL em background
docker-compose up -d

# Executar migrations
npx sequelize db:migrate

# Iniciar o servidor Node.js
node src/server.js
```

O servidor estará disponível em: **http://localhost:3001**

### Migrations

```bash
# Criar uma nova migration
npx sequelize migration:generate --name <nome-da-migration>

# Executar todas as migrations
npx sequelize db:migrate

# Desfazer última migration
npx sequelize db:migrate:undo

# Desfazer todas as migrations
npx sequelize db:migrate:undo:all
```

### Docker

```bash
# Iniciar containers em background
docker-compose up -d

# Parar containers
docker-compose down

# Ver logs do container PostgreSQL
docker-compose logs db

# Acessar o PostgreSQL via CLI
docker exec -it crud_postgres psql -U postgres -d testedb
```

## 📡 Endpoints da API

### Players

```
GET    /players/all          # Listar todos os players
GET    /players/getPlayer      # Obter player por ID
POST   /players/register          # Criar novo player
PATCH  /players/updatePlayer      # Atualizar player
DELETE /players/deletePlayer      # Deletar player
```

## 🐳 Configuração do Docker Compose

O arquivo `compose.yaml` define o serviço PostgreSQL com as seguintes características:

- **Container:** `crud_postgres`
- **Imagem:** postgres (latest)
- **Porta:** 5432 (internal) → 5432 (host)
- **Volume:** pgdata (persistência de dados)
- **Restart:** Always (reinicia automaticamente)

## 🔐 Conectar com DBeaver ou Similar

1. Host: `localhost`
2. Port: `5432`
3. Database: `testedb`
4. Username: `postgres`
5. Password: `joao0102`

## 📚 Recursos Úteis

- [Documentação Sequelize](https://sequelize.org/)
- [Documentação Express.js](https://expressjs.com/)
- [Documentação PostgreSQL](https://www.postgresql.org/docs/)
- [Docker Documentation](https://docs.docker.com/)

**Desenvolvido com ❤️ usando Node.js + Docker + PostgreSQL + Sequelize**

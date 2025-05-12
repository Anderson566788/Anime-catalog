# 📺 Anime Catalog API

Uma API RESTful construída com **Fastify** e **MySQL** para gerenciar um catálogo de animes. Ideal para praticar conceitos de backend moderno, rotas REST, e integração com banco de dados relacional.

---

## 🚀 Tecnologias Utilizadas

- **Fastify** – Framework web rápido e leve
- **MySQL** – Banco de dados relacional
- **mysql2** – Driver MySQL com suporte a Promises
- **dotenv** – Gerenciamento de variáveis de ambiente

---

## 📂 Estrutura do Projeto

```
📁 CATALOGO-ANIME/
├── 📁 config/ # Configuração do banco de dados
│ └── database.js
├── 📁 routes/ # Rotas da API
│ └── animes.js
├── .env # Variáveis de ambiente
├── server.js # Arquivo principal do servidor
├── package.json # Dependências e scripts
└── README.md
```

## 📌 Endpoints da API
Método	Rota	Descrição
GET	/animes	Lista todos os animes
POST	/animes	Cria um novo anime
PUT	/animes/:id	Atualiza um anime por ID
DELETE	/animes/:id	Remove um anime por ID

## 🛠 Recursos
✅ Criação automática do banco de dados e da tabela

✅ Suporte a array de gêneros via campo JSON

✅ Estrutura modular para facilitar manutenção

✅ Rápido e leve com Fastify

---
👨‍💻 Autor
Desenvolvido por Anderson Freire


# Modelo de Blog

Aplicação web de um blog de artigos desenvolvida em Next.js, com foco na organização, exibição e cadastro de conteúdos utilizando uma API externa.

## Funcionalidades

- Criar e publicar novos artigos;
- Página inicial estática com artigos em destaque;
- Página dedicada à exibição de todos os artigos;
- Consumo e gerenciamento de dados por meio de API externa;
- Layout responsivo para dispositivos mobile e desktop.

## Tecnologias utilizadas

- Next.js
- JavaScript (ES6+)
- HTML5
- CSS3

## Como utilizar

1. Clone o repositório;
2. Acesse a pasta do projeto:

```bash
cd blog-opiniao
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm run dev
```

5. Abra o navegador no endereço fornecido pelo terminal (geralmente `http://localhost:3000`).

## Estrutura da aplicação

- A página inicial apresenta os 4 artigos mais recentes e utiliza geração estática, proporcionando um carregamento mais rápido;
- A página "Todos os artigos" possui comportamento dinâmico, permitindo a exibição de todos os conteúdos cadastrados;
- A página "Novo artigo" permite o cadastro de novas publicações na API externa.

Desenvolvido por João Vitor Gutbrodt Projeto de estudo de React
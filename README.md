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
- React
- TypeScript
- HTML5
- CSS3 e CSS Modules
- Vitest
- GitHub Actions
- Vercel

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
4. Configure as variáveis de ambiente necessárias para a conexão com a API externa, conforme a configuração do projeto.

5. Execute o projeto:

```bash
npm run dev
```
6. Utilize "Novo Artigo" para publicar um novo artigo ou clique em um artigo já publicado para o visualizar completamente. Em "todos os artigos" se encontram artigos além dos destaques.

## Testes e qualidade de código

Para executar as verificações disponíveis no projeto:

```bash
npm run lint
npm run format:check
npm test
npm run build
```

## Estrutura da aplicação

- A página inicial apresenta os 4 artigos mais recentes em destaque;
- A página "Todos os artigos" possui comportamento dinâmico, permitindo a exibição de todos os conteúdos cadastrados;
- A página "Novo artigo" permite o cadastro de novas publicações na API externa.

## Integração contínua
O projeto utiliza GitHub Actions para automatizar as etapas de verificação e validação configuradas no pipeline. 
A aplicação está hospedada na Vercel, no endereço: https://blog-opiniao-gv9fw5qfs-vitorsgutbrodt.vercel.app
Consulte a aba Actions para acompanhar as execuções dos workflows.

Desenvolvido por João Vitor Gutbrodt 
Projeto de estudo de desenvolvimento front-end com React, Next.js e TypeScript

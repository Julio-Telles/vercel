## INSTALAÇÃO INICIAL

Para poder rodar, é necessário gerar o projeto [`npx create-next-app@latest <nomedoprojeto>`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Copiar todos os arquivos que não estão nas pastas node_modules e .next

## INSTALAÇÃO DAS DEPENDÊNCIAS

As seguintes dependências precisam ser instaladas no projeto:
- [npm install @mui/material @emotion/react @emotion/styled](https://mui.com/material-ui/)
- [npm i @mui/icons-material](https://www.npmjs.com/package/@mui/icons-material)
- [npm install react-bootstrap bootstrap](https://react-bootstrap.netlify.app/docs/getting-started/introduction)
- [npm i react-currency-input-field] (https://www.npmjs.com/package/react-currency-input-field)
- [npm i zod](https://docs.deno.com/runtime/manual/getting_started/installation)
- [npm i -g vercel](https://www.npmjs.com/package/@vercel/blob) || [npm i @vercel/blob](https://www.npmjs.com/package/@vercel/blob)
- [npm install axios] (https://axios-http.com/docs/intro)


## PARA RODAR O PROJETO LOCAL

abra o terminal, entre na pasta do projeto e digite um dos comandos:

-> "vercel login" : selecione autenticar pelo Github

-> após ser direcionado pelo Github e ver a mensagem "Vercel CLI Login Success" no browser, basta fechar e prosseguir

-> digitar "vercel" no terminal e prosseguir com as instruções

-> digitar "vercel env pull" no terminal pra criar o 'BLOB_READ_WRITE_TOKEN' dentro do arquivo .env.local

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Entre no endereço [http://localhost:3000](http://localhost:3000) com o seu navegador e veja o front no navegador.

## PARA NAVEGAR ENTRE AS PÁGINAS

basta adicionar o diretório da página que deseja abrir:
+ http://localhost:3000/produtos -> para abrir a página de produtos
+ http://localhost:3000/vendas -> para abrir a página de vendas

## REPOSITÓRIO PARA DEPLOY DO PROJETO

[GitHub do projeto](A DEFINIR)



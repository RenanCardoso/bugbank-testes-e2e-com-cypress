# Testando aplicação BugBank com Cypress

Olá, seja muito bem-vindo(a)!

Fiz este projeto de exemplo para demonstração de testes automatizados escritos com [Cypress](https://cypress.io) utilizando a aplicação [BugBank](https://bugbank.netlify.app) que foi desenvolvida e é mantida por [Jhonatas Matos](https://github.com/jhonatasmatos).


## Pré-requisitos

Para baixar e rodar este projeto, você precisará das seguintes tecnologias instaladas em seu computador:

- [git](https://git-scm.com/downloads) (usei a versão `2.47.0` enquanto escrevia este documento)
- [Node.js](https://nodejs.org/en/) (usei a versão `v20.17.0` enquanto escrevia este documento)
- npm (usei a versão `10.8.2` enquanto escrevia este documento)

**Obs:** Ao instalar o Node.js, o npm é instalado automaticamente.

## Instalação

Após clonar o projeto, execute o comando `npm install` (ou `npm i` para a versão curta) para instalar as dependências de desenvolvimento.

## Executando os testes

Neste projeto, você pode rodar os testes em modo interativo ou modo [_headless_](https://docs.cypress.io/guides/guides/command-line).

### Modo _headless_

Execute o comando `npm test` (ou `npm t` para a versão curta) para rodar a   todos os testes em modo [_headless_](https://docs.cypress.io/guides/guides/command-line).


### Modo interativo

Execute o comando `npm run cy:open` para abrir a Cypress App e rodar os testes.

### Análise estática

Para análise estática de código estou utilizando a biblioteca [_eslint-plugin-cypress_](https://www.npmjs.com/package/eslint-plugin-cypress).
Para realizar a análise estática de código, basta rodar o comando `npm run lint` ou execute diretamente o comando `npm run lint:fix` para realizar a análise e corrigir automaticamente os problemas encontrados.
___

Feito com ☕ e ❤️ por [Renan](https://github.com/RenanCardoso).
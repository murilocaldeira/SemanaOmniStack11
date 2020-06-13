## Aplicação "Be the Hero" desenvolvida na Semana Omnistack 11 da Rocketseat.

🦸‍ Be the Hero é um projeto que visa ajudar, de maneira financeira uma instituição de caridade, ajudando a mesma se manter.

Exemplo prático de uma aplicação com back-end em NODE.js, com banco de dados SQLITE, front-end em REACT.js e mobile com REACT NATIVE. 

Projeto desenvolvido durante a **Omnistack 11** 

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo][expo]
- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]

## 🚀 Como rodar este projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back End 
2. Front End 
3. Mobile 

💡Tanto o Front End quanto o Mobile precisam que o Back End esteja sendo executado para funcionar.

O projeto mobile necessita do expo instalado. 

É necessário alterar nos fontes o IP da maquina que hospeda o backend nos seguintes caminhos:

 Mobile:
 src\services

 Web(Front):
 src\services

# Vá para a pasta backend
$ cd backend

# Instale as dependências
$ npm install

# Crie o banco de dados
$ knex --knexfile knexfile.ts migrate:latest

# Execute a aplicação em modo de desenvolvimento
$ npm start

# Vá para a pasta da aplicação Front End
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run start

# Vá para a pasta da aplicação Mobile
$ cd mobile

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run android 
ou 
$ npm run ios

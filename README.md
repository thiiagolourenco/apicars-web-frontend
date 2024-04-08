<h1 align="center">
    FRONTEND PARA A API REST DE USUÁRIOS E SEUS CARROS
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pré-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executando">Executando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-buildando">Buildando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-testes-unitários">Testes unitários</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-autor">Autor</a>
</p>

<br>

## 💻 Projeto

**FRONTEND PARA API CARS** - Criação de um frontend em Angular para a API Rest de usuários e seus carros proposto no desafio técnico.

## 📝 Pré-requisitos

Para contribuir com o projeto é necessário os seguintes requisitos:

- GIT,
- [Node 16.20.2](https://nodejs.org/en/download/current),
- NPM 8.19.4,
- [Angular CLI 14.0.7](https://angular.io/cli),
- IDE JavaScrip da sua escolha (recomendação: [VsCode](https://code.visualstudio.com/)).

## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando o framework [Angular](https://github.com/angular/angular-cli) version 14.0.3. Para ver quais são todas as dependências do projeto basta abrir o arquivo **package.json**.

## 🏗️ Arquitetura e estrutura de pastas

Esse projeto foi organizado utilizando dois módulos principais: **Core e Shared**. No primeiro com o módulo da aplicação (app.module.ts...) e autenticação (authentication.module.ts). Já no segundo temos os módulos comuns da aplicação. Para facilitar o entendimento veja a imagem abaixo:
<div style="display:flex;align-items:center;">
    <img src="/src/assets/architecture.png" title="Architecture" alt="Project architecture" width="560px" />
</div>

## ⚙️ Executando

Rode `ng serve` rodar o projeto em ambiente local. Ele vai abrir na URL `http://localhost:4200/`. Essa aplicação tem auto reload caso vocÊ faça alguma alteração nos arquivos do projeto.

## 💻 Buildando

Rode `ng build` para buildar o projeto. Após o build os arquivos gerados estarão salvos na pasta `dist/`.

## 🐞 Testes unitários

O projeto Angular já vem com o Karma configurado para testes, porém a ideia seria alterar para utilizar o Jest e o Test library. Caso você esteja trabalhando no projeto e se depare com o Karma saiba que não deu tempo de trocar as libs kkkkk. Basta rodar o comando `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## 📝 Autor

Por **Thiago Lourenço** dá uma olhadinha no [LinkedIn](https://www.linkedin.com/in/thiiagolourenco) e no meu [Medium](https://thiiagolourenco.medium.com/) ✌🏽 

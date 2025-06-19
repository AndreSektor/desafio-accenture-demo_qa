## Desafio técnico -  > ACCENTURE


<div>
    <p align="center">
        <img src="https://demoqa.com/images/Toolsqa.jpg"/>
    </p>
</div>


<h1 align="center"> Automação Plataforma DEMO QA</h1>

<h3 align="center">https://demoqa.com/</h3>

## Descrição do Projeto

<p align="center">
    Projeto desenvolvido em JavaScript com Cypress, focado em recriar fluxos E2E e testes de API.
</p>

<h1 align="center">
    <p align="center">Ferramentas e Bibliotecas</p>
    <a href="https://cypress.io/">Cypress</a>
    <br></br>
    <a href="https://www.npmjs.com/package/@faker-js/faker">Faker-NPM</a>
    <br></br>
    <a href="https://cucumber.io/docs/installation/javascript/">cucumber</a>
</h1>

## Status do Projeto

<p align="center">
    <img src="https://img.shields.io/static/v1?label=STATUS&message=%20DESENVOLVIDO&color=GREEN&style=for-the-badge"/>
</p>

### Pré-requisitos

Antes de começar, instale as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/). 
<br>
Recomendamos o uso do VSCode para edição de código. [VSCode](https://code.visualstudio.com/).


### Clonando e Instalando o Projeto

- Crie uma pasta na raiz do computador

- Acesse a pasta do projeto pelo VSCode 

- Clone o repositório do projeto

$ git clone:
HTTPS: 

```bash
git clone https://github.com/AndreSektor/desafio-accenture-demo_qa.git
```

- Com o terminal aberto instale as dependências rodando o comando:
```
npm install
```
<h2>
<span style="color: red;">[ATENÇÃO]</span> <img src="https://cdn-icons-png.freepik.com/512/15638/15638163.png" width="32"/>

</h2>
- Crie na raiz do projeto crie um arquivo "cypress.env.json" e preencha-o como no exemplo "template.env"(url encontra-se no próprio arquivo para fascilitar a execução do examinador do desafio).
<h4>
<span style="color: yellow;">[ALERTA]</span></span> <img src="https://cdn-icons-png.flaticon.com/512/7188/7188147.png"" width="32"/>
</h4>
-Cenário "iteractions", drag-and-drop para inverter a ordem das barras na tela.  
Este cenário é sensível ao estado da aplicação e pode falhar.


## Features desenvolvidas

<h3>API</h1>
<p>
<h4> Criar usuário: ✅ 
<h4> Gerar Token: ✅  
<h4> Confirmar Usuário Autorizado: ✅
<h4> Listar Livros: ✅
<h4> Alugar 2 Livros: ✅
<h4> Listar detalhes dos livros alugados: ✅

</p>

<h3>TOOLS QA</h1>
<p>
<h4> 1 - Forms: Pratice Forms ✅ 
<h6> -(Preenchimento completo do formulário, inserção de arquivo .txt e fechamento do popup)
<h4> 2 - Alert: Browser Windows ✅  
<h6> -(Abrir uma nova janela, validar a mensagem e fechar a janela)
<h4> 3- Elements: Web Tables ✅
<h6> -(Cria um registro, edita o registro, deleta o registro) + (Cria 12 registros e deleta)
<h4> 4 - Widgets: Progress ✅
<h6> -(Inicia o progress bar, para em 25, valida que é menor que 25, continua até 100 e reinicia)
<h4> 5 - Interactions: Sortable ✅
<h6> -(Ordenação do maior para o menor com drag drop)
</p>

### 🎲 Rodando os testes
- Comando para abrir cypress e escolher a feature que deseja executar

```bash
npm run test
```
- Comando para executar os testes em headless com evidencia de vídeo todos as features serão executadas
```bash
npm run all
```

### TAGS
- Executar apenas um cenário com TAG(Comanda abaixo executa apenas os cenários de 'api')

```bash
npx cypress run --env TAGS=@api
```
- Executar todos os cenários
```bash
npx cypress run --env TAGS=@regression
```

## 🔒 Versões Travadas

Para garantir que todos os desenvolvedores e ambientes de CI utilizem exatamente as mesmas versões das dependências, o projeto utiliza:

- **Versões exatas** especificadas no arquivo `package.json`.

## 📦 Dependências Principais

- **Cypress:** `14.0.2`
- **Cucumber Preprocessor:** `22.1.0`
- **Esbuild Preprocessor:** `2.2.5`
- **Cypress Drag Drop:** `2.3.0`
- **Cypress File Upload:** `5.0.8`
- **Faker:** `9.4.0`
- **Cypress Tags:** `1.2.2`
- **Node:** `20.18.0`

## Autor

🧪🐞 [<img src="https://avatars.githubusercontent.com/u/111364510?s=96&v=4" width=115><br><sub>André Luís</sub>](https://github.com/AndreSektor)
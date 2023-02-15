# API de scraping de notícias G1

API que realiza scraping de notícias do site G1 e armazena o título e subtítulo no banco de dados MySQL.

## Como utilizar

Instale as dependências do projeto com o comando:

 - npm install

Instale as demais dependências necessárias seguintes sendo o Express.JS para criar a API REST, o Puppeteer.js para fazer o web scrapping, o MYSQL2 para armazenar os dados raspados e o body-parser para analisar o corpo da requisição. Além disso, as dependências @types são instaladas para fornecer suporte de tipo para as bibliotecas instaladas:

- npm install express puppeteer mysql2 body-parser cors
- npm install -D @types/express 
- npm install -D @types/puppeteer 
- npm install -D @types/mysql2 
- npm install -D @types/cors 
- npm install -D @types/body-parser

O arquivo server.ts utiliza de variáveis de ambientes para acesso seguro ao banco de dados.
Um exemplo deste arquivo é o ".env.example". Depois de criado o banco de dados com a Query salva no diretorio /db , complemente o arquivo .env.example com as informações e salve no mesmo local como ".env".
Para o projeto poder utilizar esta funcionalidade instale o pacote "dotenv-safe":

- npm install dotenv-safe

Exemplo das variáveis:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha
DB_NAME=noticias

## Execuxão:

Na pasta raiz \src digite node dist/server.js pois com o comando "tsc" um arquivo server.js foi compilado para este diretório.

Utilize-se do POSTMAN ou do INSOMNIA para efetuar as requições conforme exemplo abaixo. O Projeto esta preparado para validar a informação de URL que o usuário esta enviando.

## ENTRADA DE DADOS:

http://localhost:3000/noticia_g1

{
  "url": "https://g1.globo.com/ce/ceara/noticia/2023/02/15/veiculos-levados-em-arrastao-em-concessionaria-de-fortaleza-custam-ate-r-350-mil-veja-modelos.ghtml"
}

## SAIDA DE DADOS:

{
    "title": "Veículos levados em arrastão em concessionária de Fortaleza custam até R$ 350 mil; veja modelos",
    "subtitle": "A Polícia Civil recuperou sete dos 13 veículos que foram roubados do estabelecimento no Bairro Guararapes na noite desta segunda-feira (13)."
}

## REQUISIÇÃO COM SUCESSO: 

![image](https://user-images.githubusercontent.com/30580018/218987571-5718502a-b08a-4bba-89a6-05d2fd19cbe1.png)

## REQUISIÇÃO COM ERRO:

![image](https://user-images.githubusercontent.com/30580018/218988685-005cee27-5dba-4076-ba3d-5a30b5ab2bf4.png)


Tecnologias utilizadas
- Node.js > v18.14.0
- Express > v4.18.2
- MySQL > v3.1.2
- Puppeteer > v19.7.0
- Dotenv > v8.2.0

Autor
Nome Sobrenome - https://github.com/LeonardoPereirajr






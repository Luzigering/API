# Entidades Escola: Biblioteca!

Projeto desenvolvido como meio necessário para conclusão do Módulo 4 na Resilia Educação, curso de Desenvolvimento Web Full Stack!!

## Objetivo
O objetivo era o de, juntamente ao grupo designado, desenvolver uma API, com um tema definido em consenso e individualmente trabalhar nas entidades pertinentes ao tema.
Sabemos que a convenção seria fazer todas as entidades, mas a modalidade escolhida foi para que se implentasse melhor a didática, a API foi focada na sua funcionalidade referente ao método CRUD, não nos registros em si, e na demonstração de conhecimento da lógica por trás da API, por esse motivo, meu objetivo foi conter-me á facilidade da utilização de frameworks que pudessem auxiliar no processo, conforme recomendado!

## Pré-Requisitos

* Node.js  v.16.14.0
* NPM v.8.3.1

## Pacotes utilizados
 📂[Express](https://www.npmjs.com/package/express)                            📂[SQLite](https://www.npmjs.com/package/sqlite3)  
                                                                              
 
  📂[Nodemon](https://www.npmjs.com/package/nodemon)                            📂[Jest](https://jestjs.io/docs/getting-started) 
 
  

## Instalação da Aplicação

Você pode abrir o terminal de sua preferência e começar pelo clone!

Clonando o repositório:
```
git clone git@github.com:luzianegering/Escola-API-Biblioteca.git
```
✏️Em seguida, pode entrar na pasta raiz pelo comando 'cd':
```
cd API
```

✏️Comando necessário para instalar as dependências. (Para o pacote Nodemon, pode se fazer em um comando separado com a sintaxe padrão seguida por --save-dev):
```
npm install express sqlite3 jest supertest
```

✏️Comando necessário para efetivamente 'rodar' seu banco devidamente criado e populado:
```
npm run database
```

✏️Iniciamos o nosso serv pelo comando: 
```
npm start
```
ou
```
npm run dev
```

---

## Rotas implementadas

⚡️GET --> Rota responsável, em CRUD por ler os registros desejados. Implementei essa funcionalidade para ler todos os registros sem distinção, findAll; e nos demais atributos, exceto pelo de descrição, podendo ser consultados por:
```
/livro/<nome do atributo a ser consultado>/<busca por correspondência>
```

⚡️PUT --> Rota responsável, em CRUD por atualizar os registros desejados, com campos e as respectivas alterações, a chamada do registro para a efetiva alteração é feita como segue:
```
/livro/<id>/<id desejado>
```
Os registros a serem atualizados deverão seguir os mesmos requisitos fornecidos para a ação de post, declarados mais abaixo:
⚡️POST --> Rota responsável, em CRUD por criar novos registros no nosso banco, precisamos inserir valores que estejam de acordo com as condições estabeleciadas previamente na criação:
```
"id": "<AUTO_INCREMENT>"
"titulo": "<Precisa ser um VARCHAR(255)>"
"descricao": "<Precisa ser uma string suportada pelo formato LONG TEXT >"
"status": "<'Disponível' ou 'Indisponível'>"
"categoria": "<Precisa ser uma 'catpermitida'>"
"autor": "<Precisa ser um VARCHAR(255)>"
```

⚡️DELETE -->Rota responsável, em CRUD por deletar registros de um banco, funciona pela seguinte sintaxe:
```
/livros/<id>/<id do registro a ser deletado>
```

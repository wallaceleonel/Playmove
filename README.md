#                                       PLAYmove


## Desenvolvendo  uma api seguindo os padrões RESTful
## Desenvolvendo front-end em React

Neste projeto é desenvolvido um controle de cadastro de companhias e fornecedores.

## Stacks usadas 

- .net Core
- React
  - react-router-dom
  - axios
  - yup
  - react-hook-form
- SQL_Server

## Api documentada no Swagger

### Back-end desenvolvido em .net core

 <img src= "img\back-end\swaggerCompanies.PNG" align="center">
 <img src= "img\back-end\swaggerProviders.PNG" align="center">
 <img src="img\back-end\schemas.PNG" align="center">

 ### Front-end desenvolvido em react

  <img src= "img\front-end\frontForncedorCompanhia.PNG" align="center">
  
  <img src= "img\front-end\feedCompanhia.PNG" align="center">
  
  <img src="img\front-end\editarCompanhia.PNG" align="center">
  
  <img src= "img\front-end\cadastroCompanhia.PNG" align="center">

  <img src= "img\front-end\feedFornecedor.PNG" align="center">
  
  <img src="img\front-end\EditarFornecedor.PNG" align="center">

  <img src="img\front-end\AdicionarForncedor.PNG" align="center">

 ## Rodando aplicação.

executar conexão com o banco de dado no arquivo appsettings.json
 ````sh
    "ConnectionStrings": {
    "DefaultConnection": "Data Source=XXXXXX;Persist Security Info=True;User ID=XX; Initial Catalog= XXXXXXDb; Password=XXXXXXXXX"
  },
 ````
 Apos conexão com o banco abrir terminal do gerenciador de pacotes do Nuget e gerar migrações
 ````sh
    add-migration nomeMigration

    update database
 ````
 Instalar dependencias e bibliotecas para realizar chamadas na api pelo front 
 ````sh
    npm install axios
    npm install yup
    npm install react-hook-form
    npm install @hookform
    npm install react-router-dom
    npm install react
 ````

Com as depencencias instaladas você pode executar api via container usando Docker Desktop.

Ao acessar pagina do projeto você pode dar comando para iniciar programa.
````sh 
npm start
````

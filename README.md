# Projeto_node

Como iniciar o projeto:

1.	O usuário deverá abrir o Projeto na sua IDE de preferência;

2.	Logo em seguida ele terá que abrir o arquivo “.env”;

3.	Dentro do projeto .env o usuário terá que fazer duas alterações:

3.1.	Primeiramente na linha 4 onde se consiste a senha do banco de dados, ela estará desta maneira “DB_PASS=Renato100”, o usuário deverá alterar apenas o que está depois do “=”, como por exemplo, “DB_PASS=SenhaDoUsuário”, se não tiver senha deixar em branco;

3.2.	Logo em seguida o usuário deverá modificar a linha 5, que se consiste no nome do banco de dados em que será armazenado a tabela de dados, a linha estará assim “DATABASE=cad_comentarios”, e deve se alterar apenas o que está depois do “=”, como por exemplo, “DATABASE=BancoDeDadoDoUsuario”;

3.3.	Por fim ele irá salvar o arquivo e finaliza-lo.

4.	Logo em seguida ainda dentro de sua IDE o usuário deverá abrir o arquivo “Post.js”, que está localizado dentro da pasta “models” que está na raiz do projeto;

5.	Ele deverá retirar o comentário da linha 9, que estará assim “//Post.sync({force: true})”, para retirar o comentário precisa apenas apagar os “//”, ficando assim “Post.sync({force: true})” salvando o arquivo no final;

5.1.	O proximo passo o usuário deverá abir o Prompt de Comando, entrar pelo Prompt de Comando dentro da pasta raiz do projeto e depois dentro da pasta models onde está o arquivo “Post.js”;

5.2.	Quando estiver ja dentro da pasta models pelo Promp de Comando ele digitará o seguinte comando “node Post.js”, esse comando inicia o arquivo e faz com que ele crie a tabela que será usada no projeto;

5.3.	Por fim o usuário irá finalizar a execução pressionando as teclas CTRL+C, e irá modificar novamente o arquivo “Post.js” dentro de sua IDE colocando novamente o comentário na linha 9 o retornando o que era antes o deixando assim “//Post.sync({force: true})” e salvando o arquivo. Esse comando deverá ser comentado para que ele não fique recriando a tabela sempre que o projeto for executado.

6.	Por fim o usuário deverá iniciar o Prompt de Comando novamente, pelo Prompt de Comando entrar dentro da pasta raiz do Projeto que é a “Projeto_node” e digitar o seguinte comando “nodemon index.js”, este comando inicia o projeto, e depois de iniciar o projeto acessar em seu navegador a url “http://localhost:3000”.
Pronto seu projeto está pronto para ser executado!

Bibliotécas baixadas:
•	npm install cors;
•	npm install dotenv;
•	npm install mysql;
•	npm install ibm-watson@^6.0.4;
•	npm install express;
•	npm install body-parser;
•	npm install sequelize;
•	npm install mediaserver;
• npm install ajax.


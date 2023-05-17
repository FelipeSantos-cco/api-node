# APRENDENDO A >CRIAR< API EM NODEJS

## Configuração inicial

Antes de tudo, crie um diretório (uma **pasta**) em seu computador.
 - Eu criei o diretório **api-node**

Entre neste diretório e crie o arquivo **index.js**. Este aquivo é o inicio da sua API.

Agora, neste mesmo diretório, abra o terminal endereçado nela.

Assim que abrir o terminal(ou cmd) digite o comando
```bash
npm init -y
```
### Explicando:
- O `npm` (Node Package Manager) é um gerenciador de pacotes para a plataforma Node.js. Ele permite que você instale, compartilhe e gerencie as dependências do seu projeto de forma fácil e eficiente.
- O comando `npm init` é usado para inicializar um novo projeto e criar um arquivo chamado `package.json`. Esse arquivo armazena **informações** sobre o projeto, como **nome**, **versão**, **descrição**, **scripts**, **dependências** e muito mais. O `package.json` é **essencial para gerenciar** e compartilhar seu projeto com outras pessoas, além de fornecer **informações importantes** para o npm ao instalar e atualizar pacotes.
- O argumento `-y` tira a necessidade de responder a perguntas interativas.


Agora é nescessario trazer as bibliotecas para o projeto.

A primeira a trazer, é a **express**. Rode o comando a baixo (No mesmo lugar onde está o arquivo package.json)
```bash
npm install express
```

Ele vai criar a pasta `node_modules`. É nela que vão ficar as bibliotecas e suas depencias que o seu sistema ira usar, então... **Não mexe nela não viu?**


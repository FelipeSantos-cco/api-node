# APRENDENDO A >CRIAR< API EM NODEJS

## Sumário
 - ### [Confiração inicial](#configuração-inicial)
 - ### [Rotas](#rotas-1)
 - ### [Conexão com o BD](#conexão-com-o-banco-de-dados)
 - 

---

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

A partir deste ponto, vamos mexer no `index.js`, Então recomendo fortemente ler o código, pois comentei a maioria das linhas para o total entendimento.

[...] Se você chegou na linha **20** do código do `index.js`, boaaaa ! Testa ai, não copia, escreve com as suas mãos fazendo os seus testes.

Da linha **1 à 20**, é simplesmente só para colocar o servidor "no ar". E para fazer isso, rode o comando:
```bash
node index.js
```

E observe a Resposta que o terminal irá te dar.

Se funcionou... OK :)... Se não, google, tentativa e erro, ou pode me chamar :) 

---

## Rotas 

Antes de tudo... O que são rotas? 
> Rotas são caminhos definidos em um aplicativo web que correspondem a URLs específicas. Elas são responsáveis por determinar o que acontece quando um usuário acessa uma determinada URL. As rotas mapeiam URLs para funções ou manipuladores de código que serão executados quando a URL correspondente for acessada. Por exemplo, em um aplicativo de blog, podemos ter uma rota "/post" que mostra um determinado post quando o usuário acessa essa URL. As rotas permitem que você organize e controle como seu aplicativo responde às solicitações dos usuários, direcionando-as para a lógica apropriada do servidor.
> ~ Tio Google. 

Entendeu? Se sim, blzz vamo lá. 

Crie um diretório chamado routers, dentro do diretório o seu projeto.

Dentro dessa pasta crie o `atendimentoRoute.js`.

Agora dentro desse arquivo faça o que está no aquivo aqui deste repositório, leia o código sem medo :)

Leu o arquivo `atendimentoRoute.js`? Ok. Agora crie um novo arquvio chamado `index.js`, porem na pasta **`routers`**

---

## Conexão com o Banco de Dados

Bom... É importante a gente ter o BD né? então vamos lá :)

O script do banco de dados está em [DB](./database/script.sql);

Você precisa da biblioteca do MySQL para poder utilizar em sua API, por isso, rode o comando a baixo - É importante relembrar, rode esse comando no mesmo lugar onde está o arquivo `package.json`.
```bash
npm install mysql
```

Crie um diretório chamado `database` ou algum nome que te faça lembrar que este diretório está relacionado ao banco de dados.

Crie um arquivo chamado `conexao.js`, que o seu arquivo de conexão com o banco de dados.

Veja este aquivo aqui no repositório



# APRENDENDO A >CRIAR< API EM NODEJS COM UMA PÁG HTML

> **Em desenvolvimento!**

### Antes de tudo... Faça a configuração inicial do projeto

Crie um diretório com a seguinte estrutura:
```
├──site
    ├──public
    │    ├── assets
    │    ├── css
    │    └── js
    ├──src
    │    ├── database
    │    ├── model
    │    ├── controllers
    │    └── routes
```

O diretório ***Public*** é responsável por conter toda a parte estática do seu site, como por exemplo o HTML, os JS de interação e o CSS - [Front End]

Já o diretório ***src*** se responsabiliza pelo "pensamento do seu site" - [Back End]

> Se estiver criando um repositório no github, não esqueça de adicionar o arquivo ".gitignore" contendo o **node_modules** dentro. Caso tenha dúvidas, olhe o .gitignore deste repositório.

---

## Configuração inicial

Dentro da pasta ***site*** digite o seguinte commando:
```bash
npm init -y
```
# SDBJ-Server

O SDBJ-Server é o mais novo banco de dados "em nuvem?" podendo ser usado com Http's Requests!

Irei dar exemplos em JS, mas irei informar algumas bibliotecas que vocês podem estar utilizando o SDBJ-Server e qualquer outra api que use isso.

> [Python: Requests](https://docs.python-requests.org/pt_BR/latest/user/quickstart.html)
> 
> **Java: HttpUrlConnection**
> 
> [JS 1: Axios](https://axios-http.com/)
> 
> **JS 2: SDBJ-Server**




# Preparando sua vps (Ubuntu) para rodar o "SDBJ-Server-Igniter":

## Passo 1
Antes de tudo, instale o **Git**. Ele que vai ser usado para clonar esse repositório dentro de sua vps no ubuntu :)

Use: ```sudo apt-get install git```

Siga todos os passos para instalação. Se necessário, o Google é seu melhor amigo ;)


Após isso, instale o NVM (Node Version Manager). Usando ```curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash```

(Se você não tem o curl, Use ```sudo apt install curl```)


## Passo 2
Clone o nosso repositório. Eu deixo :)

Crie uma pasta onde vai ficar o igniter e execute o comando dentro dela:
```git clone https://github.com/renato425/sdbj-server.git```

Instale o node no Ubuntu, usando ```nvm install node```

Se quiser editar senha e porta. É só editar no arquivo `igniter.js`

Instale as depedências utilizando `npm i`

Após isso, é só executar o comando `node igniter.js`


**Pronto, o seu serviço SDBJ-Server está rodando com sucesso! :)**

# Seja bem-vindo ao meu portfólio

Bem-vindo ao meu portfólio! Aqui, você encontrará informações detalhadas sobre como configurar, executar e entender a estrutura do meu projeto.

## Descrição do Projeto

Este projeto é um portfólio pessoal desenvolvido para exibir meus trabalhos, habilidades e fornecer um meio de contato. A aplicação é composta por um frontend utilizando React e TypeScript, e um backend com TypeScript, Express e Telegraf.

## Configuração Inicial

### Clonar o Repositório

Para começar, clone o repositório do GitHub para sua máquina local:

```bash
git clone https://github.com/lipooliveira/portfolio
```

### Baixar as Dependências

Navegue até o diretório do projeto e baixe as dependências necessárias com o npm:

```bash
npm install
```

### Iniciar o Servidor

Depois de instalar as dependências, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor estará ativo na porta padrão 3000.

## Frontend

O frontend do projeto foi desenvolvido utilizando React e TypeScript, proporcionando uma interface de usuário moderna e dinâmica. Todo o código do frontend está disponível na pasta `frontend`.

### Principais Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superconjunto da linguagem JavaScript que adiciona tipagem estática opcional.

### Estrutura do Frontend

A estrutura do frontend está organizada de forma a facilitar a manutenção e escalabilidade do projeto:

```
frontend/
├── src/
│   ├── lang/
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── index.html
└── package.json
```

## Backend

O backend foi desenvolvido utilizando TypeScript, Express e Telegraf para gerenciar as funcionalidades da aplicação e o envio de mensagens através de um bot do Telegram.

### Principais Tecnologias Utilizadas

- **TypeScript**: Para garantir tipagem estática e maior robustez no código.
- **Express**: Framework minimalista para criação de servidores web em Node.js.
- **Telegraf**: Biblioteca para interação com a API do Telegram.

### Estrutura do Backend

A estrutura do backend está organizada para facilitar o desenvolvimento e a manutenção:

```
backend/
├── src/
│   ├── entities/
│   ├── integrations/
|   ├── interfaces/
│   ├── index.ts
│   └── ...
└── package.json
```

### Rotas

O backend possui duas rotas:

- `GET - /`: Rota padrão da aplicação, onde está a página principal do portfólio.
- `POST - /message`: Rota para envio de mensagens através de um bot do Telegram. Esta funcionalidade foi escolhida pela simplicidade e praticidade.

#### Exemplo de Requisição POST

Para enviar uma mensagem através do bot do Telegram, utilize a seguinte estrutura de requisição:

```json
POST /message
{
  "name": "Seu Nome",
  "email": "seu.email@example.com",
  "message": "Sua mensagem aqui"
}
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests. Certifique-se de seguir as melhores práticas de codificação e escrever testes para novas funcionalidades.

## Autor

- **Lipo Oliveira**: Desenvolvedor full-stack responsável pelo projeto. Para mais informações, visite [meu GitHub](https://github.com/lipooliveira).
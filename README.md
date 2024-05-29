## Instruções

Primeiro, clone o repositório.

Em seguida execute:

```bash
npm install
#ou
yarn install
```

Após ter baixado as dependências, navegue até o arquivo ".env" na raiz do projeto. Altere a variável "DATABASE_URL" conforme a sua instância do banco de dados.

Em seguida execute:

```bash
yarn prisma migrate dev
#ou
npx prisma migrate dev
```

O comando acima irá gerar a migration do banco conforme o arquivo "schema.prisma" localizado na pasta "prisma".

E por fim execute:
```bash
yarn dev
#ou
npm run dev
```

Feito isso, a aplicação irá começar a escutar na porta 3001, setada no arquivo ".env"

## Documentação

Para acessar a documentação da API acesse:
http://localhost:3001/docs



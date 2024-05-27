import express, { Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors';

// lib para documentação
import swaggerUi from 'swagger-ui-express';

import swaggerDocs from './swagger.json'

import { router } from './routes'

// inicialização do express
const app = express();

// expecifica que o tipo de dado será o json
app.use(express.json());

// rota da documentação da api
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// cors - habilita para qualquer IP fazer requisição
app.use(cors());

app.use(router);

// midleware para lançamento de exeções
// util pra lançar exceções com try catch sem quebrar a aplicação
app.use((err: Error, req: Request, res: Response) => {
    if (err instanceof Error) {
        // se err for uma instancia do tipo erro
        return res.status(400).json({
            error: err.message
        })
    }

    // se caso o err não for do tipo Error, cai neste return devolvendo erro do servidor (500).
    return res.status(500).json({
        status: 'error',
        message: 'Erro interno.'
    })
})

// o servidor passa a escutar a porta setada no .env
app.listen(process.env.PORT, () => console.log('Servidor ativo!'));
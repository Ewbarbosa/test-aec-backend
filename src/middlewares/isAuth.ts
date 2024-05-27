import { NextFunction, Request, Response } from 'express'

import { verify } from 'jsonwebtoken'

interface PayLoad {
  sub: string;
}

export function isAuth(req: Request, res: Response, next: NextFunction) {

  // recebe o token
  const authToken = req.headers.authorization;

  // se não existir token retorna 401
  if (!authToken) {
    return res.status(401);
  }

  // aqui o token recebido é salvo na variavel "token"
  const [, token] = authToken.split(" ");

  // validação do token
  // o catch retorna 401 e finaliza a requisição
  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as PayLoad;

    // salva o id do usuário na variável criada no Request do express
    req.user_id = parseInt(sub);
    
    return next();

  } catch (err) {
    return res.status(401).send();
  }
}
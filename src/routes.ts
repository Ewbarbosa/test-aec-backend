import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router();


// Rota para criar um novo usuário
router.post('/user', new CreateUserController().handle);

export { router };
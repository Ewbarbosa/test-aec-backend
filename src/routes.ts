import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { CreateAddressController } from './controllers/address/CreateAddressController';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();


// Rota para criar um novo usuário
router.post('/user', new CreateUserController().handle);

// Rota para criar um novo endereço
router.post('/address', new CreateAddressController().handle);

// rota para fazer login
router.post('/login', new AuthUserController().handle);

export { router };
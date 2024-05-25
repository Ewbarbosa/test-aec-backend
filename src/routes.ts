import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { CreateAddressController } from './controllers/address/CreateAddressController';

const router = Router();


// Rota para criar um novo usuário
router.post('/user', new CreateUserController().handle);

// Rota para criar um novo endereço
router.post('/address', new CreateAddressController().handle);

export { router };
import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { CreateAddressController } from './controllers/address/CreateAddressController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { UpdateAddressController } from './controllers/address/UpdateAddressController';
import { DeleteAddressController } from './controllers/address/DeleteAddresController';
import { ListAddressController } from './controllers/address/ListAddressController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { ListAddressByIdController } from './controllers/address/ListAddressByIdController';

// importação do middleware
import { isAuth } from './middlewares/isAuth';

const router = Router();

// Rota para criar um novo usuário
router.post('/user', new CreateUserController().handle);

// Rota para criar um novo endereço
router.post('/address', isAuth, new CreateAddressController().handle);

// Rota para atualizar o endereço
router.put('/address', isAuth, new UpdateAddressController().handle);

// rota para fazer login
router.post('/login', new AuthUserController().handle);

// rota para deletar um endereço
router.delete('/address', isAuth, new DeleteAddressController().handle);

// rota para listar os endereços 
router.get('/address', isAuth, new ListAddressController().handle);

// rota para buscar informações do usuário
router.get('/me', isAuth, new DetailUserController().handle);

// rota para listar endereços por ID
router.get('/addressId', isAuth, new ListAddressByIdController().handle);

export { router };
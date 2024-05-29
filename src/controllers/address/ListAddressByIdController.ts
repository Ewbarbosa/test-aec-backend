import { Request, Response } from 'express';

import { ListAddresByIdService } from '../../services/address/ListAddresByIdService';

class ListAddressByIdController {

	async handle(req: Request, res: Response) {

		const listAddress = new ListAddresByIdService();

		const { id } = req.query;

		const address = await listAddress.execute(parseInt(id as string));

		return res.json(address);
	}

}

export { ListAddressByIdController }
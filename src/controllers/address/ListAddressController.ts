import { Request, Response } from 'express'

import { ListAddressService } from '../../services/address/ListAddressService'

class ListAddressController {

  async handle(req: Request, res: Response) {

    const list = new ListAddressService();

    const user_id = req.user_id;

    const address = await list.execute(user_id);

    return res.json(address);
  }
}

export { ListAddressController }
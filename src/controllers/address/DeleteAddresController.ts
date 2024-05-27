import { Request, Response } from "express";

import { DeleteAddressService } from "../../services/address/DeleteAddressService"

class DeleteAddressController {

    async handle(req: Request, res: Response){

      const deleteAddress = new DeleteAddressService();

      const { id } = req.body;      

      const address = await deleteAddress.execute(id);

      return res.json(address);
    }

}

export { DeleteAddressController }
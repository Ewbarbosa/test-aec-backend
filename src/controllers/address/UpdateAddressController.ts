import { Request, Response } from "express";

import { UpdateAddressService } from "../../services/address/UpdateAddressService";

class UpdateAddressController {

  async handle(req: Request, res: Response) {

    const { id, street, complement, zip_code, district, city, state } = req.body;

    const update = new UpdateAddressService();

    const address = await update.execute({ id, street, complement, zip_code, district, city, state });

    return res.json(address);
  }

}

export { UpdateAddressController }
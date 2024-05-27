import { Request, Response } from "express";

import { CreateAddressService } from "../../services/address/CreateAddressService";

class CreateAddressController {

  async handle(req: Request, res: Response) {

    const { street, complement, zip_code, district, city, state } = req.body;

    const user_id = req.user_id;

    const createAddress = new CreateAddressService();

    const address = await createAddress.execute({
      street,
      complement,
      zip_code,
      district,
      city,
      state,
      user_id
    })

    return res.json(address);
  }
}

export { CreateAddressController }
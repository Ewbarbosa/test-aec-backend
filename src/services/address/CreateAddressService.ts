import prismaClient from "../../prisma";

interface AddressProps {
  street: string;
  complement: string;
  zip_code: string;
  district: string;
  city: string;
  state: string;
  user_id: number;
}

class CreateAddressService {

  async execute({ street, complement, zip_code, district, city, state, user_id }: AddressProps) {

    const address = await prismaClient.address.create({
      data: {
        street: street,
        complement: complement,
        zip_code: zip_code,
        district: district,
        city: city,
        state: state,
        user_id: user_id
      },
      select: {
        id: true,
        street: true,
        complement: true,
        zip_code: true,
        district: true,
        city: true,
        state: true,
        user_id: true
      }
    });

    return address;
  }

}

export { CreateAddressService }
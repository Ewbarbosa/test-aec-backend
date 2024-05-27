import prismaClient from "../../prisma";

interface AddressProps {
  id: number;
  street: string;
  complement: string;
  zip_code: string;
  district: string;
  city: string;
  state: string;  
}

class UpdateAddressService {

  async execute({id, street, complement, zip_code, district, city, state}: AddressProps) {

    const address = await prismaClient.address.update({
      where: {
        id: id
      },
      data: {
        street: street,
        complement: complement,
        zip_code: zip_code,
        district: district,
        city: city,
        state: state
      }
    })
    
    return address;
  }

  



}

export { UpdateAddressService }
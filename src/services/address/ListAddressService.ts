import prismaClient from "../../prisma";

class ListAddressService {

  async execute(user_id: number) {

    const address = await prismaClient.address.findMany({
      where: {
        user_id: user_id
      }
    })

    return address;
  }

}

export { ListAddressService }
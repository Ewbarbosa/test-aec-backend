import prismaClient from "../../prisma";

class ListAddresByIdService {

  async execute(id: number){

    const address = await prismaClient.address.findFirst({
      where: {
        id: id
      }
    })

    return address;    
  }

}

export { ListAddresByIdService }
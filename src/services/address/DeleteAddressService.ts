import prismaClient from "../../prisma";

class DeleteAddressService {

  async execute(id: number) {

    try {

      const addressExists = await prismaClient.address.findFirst({
        where: {
          id: id
        }
      })

      if (!addressExists) {
        return { Erro: "Erro ao deletar endereço" }
      }

      const address = await prismaClient.address.delete({
        where: {
          id: id
        }
      })

      return address;

    } catch (err) {
      return { Erro: "Erro ao deletar endereço" }
    }
  }

}

export { DeleteAddressService }
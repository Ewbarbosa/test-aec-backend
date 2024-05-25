import prismaClient from "../../prisma";

interface UserProps {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: UserProps) {

        // verifica se os dados estão preenchidos
        if (name === '' || email === '' || password === '') {
            throw new Error("Preencha todos os dados");
        }

        // verifica se o email já existe no banco de dados
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("E-mail já cadastrado")
        }

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: password
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateUserService }
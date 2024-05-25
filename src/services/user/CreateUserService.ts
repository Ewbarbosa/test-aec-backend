import prismaClient from "../../prisma";

// lib para criptografar senhas salvas no banco
import { hash } from 'bcryptjs';

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

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
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
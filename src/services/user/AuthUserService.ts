import prismaClient from "../../prisma";

// lib para comparar as senhas criptografadas
import { compare } from 'bcryptjs'

// lib para gerar um JWT
import { sign } from 'jsonwebtoken'

interface AuthProps {
  email: string;
  password: string;
}

class AuthUserService {

  async execute({ email, password }: AuthProps) {

    // verifica se o e-mail existe
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    // se não existir o usuário no banco, retorna o erro
    if (!user) {
      throw new Error('Usuário ou senha inválidos.')
    }

    // compara a senha informada pelo usuário e a senha registrada no banco de dados
    const passwordOk = await compare(password, user.password);

    // se a senha estiver incorreta retorna o erro
    if(!passwordOk){
      throw new Error('Usuário ou senha inválidos.')
    }

    // se não ocorreu nenhum do erros acima, é gerado um token
    const token = sign(
      {        
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id.toString(),
        expiresIn: '1d'
      }
    )
    
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    }
  }

}

export { AuthUserService }
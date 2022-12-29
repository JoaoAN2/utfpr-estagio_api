import prismaClient from "../prisma";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IUserRequest {
    email: string;
    senha: string;
    nome: string;
    telefone: string;
    foto: string;
}

class CreateUserService {
    async execute({ email, senha, nome, telefone, foto = "" }: IUserRequest) {

        if (!email) {
            throw new Error("Email incorreto!");
        }

        let user = await prismaClient.usuario.findFirst({
            where: {
                email
            }
        });

        if (user) {
            throw new Error("Email já utilizado!");
        }

        const passwordHash = await hash(senha, 8);
        user = await prismaClient.usuario.create({
            data: {
                email,
                senha: passwordHash,
                nome,
                telefone,
                foto
            }
        });

        const key = "477bf88e019e0742b0f696e3bca1b12c";
        const token = sign({
            email: user.email
        }, key, {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { CreateUserService }

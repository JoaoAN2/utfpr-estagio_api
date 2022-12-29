import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import prismaClient from "../prisma";

interface IAuthenticateRequest {
    email: string;
    senha: string;
}

class LoginService {

    async execute({ email, senha } : IAuthenticateRequest) {
        const user = await prismaClient.usuario.findFirst({
            where: { email }
        });

        if (!user) {
            throw new Error("Email/Senha incorretos");
        }

        const senhaMatch = await compare(senha, user.senha);
        if (!senhaMatch) {
            throw new Error("Email/senha incorretos");
        }

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

export { LoginService };

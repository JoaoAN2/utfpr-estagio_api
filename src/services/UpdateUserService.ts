import { Usuario } from "@prisma/client";
import { hash } from "bcryptjs";
import prismaClient from "../prisma";

export class UpdateUserService {
    async execute(user: Usuario) {
        const passwordHash = await hash(user.senha, 8);
        user.senha = passwordHash;
        
        const updateUser = await prismaClient.usuario.update({
            where: {
                id: user.id
            },
            data: user,
        });

        return updateUser;
    }
}
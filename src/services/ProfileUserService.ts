import prismaClient from "../prisma";
import { Usuario } from "../@types/utfpr-estagio_api";

class ProfileUserService {

    async execute(user_id: string) {
        
        const user: Usuario | null = await prismaClient.usuario.findFirst({
            where: {
                id: user_id
            }
        });

        if (!user) {
            throw new Error("Usuário não encontrado!");
        }
        
        delete user?.senha;
        return user;
    }

}

export { ProfileUserService };
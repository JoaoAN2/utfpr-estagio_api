import prismaClient from "../prisma";


export class RemoveUserService {
    async execute(user_id: string) {
        try {
            const deleteUser = await prismaClient.usuario.delete({
                where: {
                    id: user_id
                }
            });

            const message = "Usuário " + deleteUser.nome + " deletado com sucesso";

            return message;
        } catch (error) {
            throw new Error("Usuário não existe");
        }

    }
}
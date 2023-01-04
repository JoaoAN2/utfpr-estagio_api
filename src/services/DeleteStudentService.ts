import prismaClient from "../prisma";

export class DeleteStudentService {
    async execute(id: string) {
        const deletedStudent = await prismaClient.aluno.delete({
            where: {
                usuario_id: id
            }
        });
        return deletedStudent;
    }
}
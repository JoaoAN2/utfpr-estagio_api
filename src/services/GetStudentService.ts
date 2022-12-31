import prismaClient from "../prisma";

export class GetStudentService {
    async execute(id: string) {
        const resultStudent = await prismaClient.aluno.findUniqueOrThrow(
            { where: { usuario_id: id } })
            .catch(() => 
            { throw new Error("Aluno não encontrado") });
        
        return resultStudent;
    }
}
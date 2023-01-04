import { Aluno } from "@prisma/client";
import prismaClient from "../prisma";

export class UpdateStudentService {
    async execute(newStudent: Aluno) {
        const oldStudent = await prismaClient.aluno.findFirst({
            where: { usuario_id: newStudent.usuario_id }
        });

        if(!oldStudent) {
            throw new Error("Aluno não existe!");
        }

        const updatedAluno = await prismaClient.aluno.update({
            where: { usuario_id: newStudent.usuario_id },
            data: newStudent
        });

        return updatedAluno;
    }
}
import { Aluno } from "@prisma/client";
import prismaClient from "../prisma";

export class CreateStudentService {
    async execute(student: Aluno) {
        const createdStudent = await prismaClient.aluno.create({
            data: student
        });

        return createdStudent;
    }
}
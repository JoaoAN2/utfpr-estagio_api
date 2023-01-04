import prismaClient from "../prisma";

export class GetListStudentService {
    async execute() {
        const listStudent = prismaClient.aluno.findMany();
        return listStudent;
    }
}
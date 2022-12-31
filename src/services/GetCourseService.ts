import prismaClient from "../prisma";

export class GetCourseService {
    async execute(id: number) {
        const resultCourse = await prismaClient.curso.findUniqueOrThrow(
            { where: { id } })
            .catch(() => 
            { throw new Error("Curso não encontrado") });
        
        return resultCourse;
    }
}
import prismaClient from "../prisma";

export class CreateCourseService {
    async execute(nome: string) {
        const createdCourse = await prismaClient.curso.create({
            data: {
                nome
            }
        });
        console.log(createdCourse)
        return createdCourse;
    }
}
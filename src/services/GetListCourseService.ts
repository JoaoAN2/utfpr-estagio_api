import prismaClient from "../prisma";

export class GetListCourseService {
    async execute() {
        const listCourse = await prismaClient.curso.findMany();
        return listCourse;
    }
}
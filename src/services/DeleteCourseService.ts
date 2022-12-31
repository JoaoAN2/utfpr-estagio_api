import prismaClient from "../prisma";

export class DeleteCourseService {
    async execute(id: number) {
        const deletedCourse = await prismaClient.curso.delete({
            where: {
                id
            }
        });
        return deletedCourse;
    }
}
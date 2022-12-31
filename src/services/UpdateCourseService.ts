import { Curso } from "@prisma/client";
import prismaClient from "../prisma";

export class UpdateCourseService {
    async execute(newCourse: Curso) {
        const oldCourse = await prismaClient.curso.findFirst({
            where: { id: newCourse.id }
        });

        if(!oldCourse) {
            throw new Error("Curso não existe!");
        }

        if (!newCourse.nome.trim()) {
            throw new Error("Nome do Curso não pode estar vázio!!");
        }

        const updatedCourse = await prismaClient.curso.update({
            where: { id: newCourse.id },
            data: newCourse
        });

        return updatedCourse;
    }
}
import { Aluno } from "@prisma/client";
import { Request, Response } from "express";
import { CreateStudentService } from "../services/CreateStudentService";

export class StudentController {
    async create(request: Request, response: Response) {
        const { user_id } = request;
        const { ra, periodo, curso_id, minutos_totais, minutos_restantes, minutos_concluidos } = request.body;
        const student: Aluno = {
            usuario_id: user_id,
            ra,
            periodo,
            curso_id,
            minutos_totais,
            minutos_restantes,
            minutos_concluidos
        }
        const createStudentService = new CreateStudentService();
        const createdStudent = await createStudentService.execute(student);
        return response.json(createdStudent);
    }

    
}
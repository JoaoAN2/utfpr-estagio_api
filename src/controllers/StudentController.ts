import { Aluno } from "@prisma/client";
import { Request, Response } from "express";
import { CreateStudentService } from "../services/CreateStudentService";
import { GetStudentService } from "../services/GetStudentService";

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

    async read(request: Request, response: Response) {
        try {
            const id = String(request.query.id);
            const getStudentService = new GetStudentService();
            const student = await getStudentService.execute(id);
            return response.json(student);
        } catch (error) {
            return response.json({erro: error.message})
        }
    }
}
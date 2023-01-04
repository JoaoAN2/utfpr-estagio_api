import { Aluno } from "@prisma/client";
import { Request, Response } from "express";
import { CreateStudentService } from "../services/CreateStudentService";
import { DeleteStudentService } from "../services/DeleteStudentService";
import { GetListStudentService } from "../services/GetListStudentService";
import { GetStudentService } from "../services/GetStudentService";
import { UpdateStudentService } from "../services/UpdateStudentService";

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

    async listStudent(request: Request, response: Response) {
        const getListStudentService = new GetListStudentService();
        const listStudent = getListStudentService.execute();
        return response.json(listStudent);
    }

    async update(request: Request, response: Response) {
        const { user_id } = request;
        const { ra, periodo, curso_id, minutos_totais, minutos_restantes, minutos_concluidos } = request.body;
        const newStudent: Aluno = {
            usuario_id: user_id,
            ra,
            periodo,
            curso_id,
            minutos_totais,
            minutos_restantes,
            minutos_concluidos
        }
        const updateUserService = new UpdateStudentService();
        try {
            const result = await updateUserService.execute(newStudent);
            return response.json(result);
        } catch (err) {
            return response.json({erro: err.message});
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body;
        const deleteStudentService = new DeleteStudentService();
        try {
            const deletedStudent = await deleteStudentService.execute(id);
            return response.json(deletedStudent);
        } catch (error) {
            return response.json({erro: error.message})
        }
    } 
}
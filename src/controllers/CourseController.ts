import { Request, Response } from "express";
import { CreateCourseService } from "../services/CreateCourseService";
import { DeleteCourseService } from "../services/DeleteCourseService";
import { GetCourseService } from "../services/GetCourseService";
import { GetListCourseService } from "../services/GetListCourseService";
import { UpdateCourseService } from "../services/UpdateCourseService";

export class CourseController {
    async create(request: Request, response: Response) {
        const { nome } = request.body;
        const createCourseService = new CreateCourseService();
        const createdCourse = await createCourseService.execute(nome);
        return response.json(createdCourse);
    }

    async read(request: Request, response: Response) {
        try {
            const id = Number(request.query.id);
            const getCourseService = new GetCourseService();
            const course = await getCourseService.execute(id);
            return response.json(course);
        } catch (error) {
            return response.json({erro: error.message})
        }
    }

    async listCourse(request: Request, response: Response) {
        const getListCourseService = new GetListCourseService();
        const listCourses = await getListCourseService.execute();
        return response.json(listCourses);
    }

    async update(request: Request, response: Response) {
        const { id, nome } = request.body;
        const updateCourseService = new UpdateCourseService();
        try {
            const updatedCourse = await updateCourseService.execute({ id, nome });
            return response.json(updatedCourse);
        } catch (error) {
            return response.json({erro: error.message});
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body;
        const deleteCourseService = new DeleteCourseService();
        const deletedCourse = await deleteCourseService.execute(id);
        return response.json(deletedCourse);
    }
}
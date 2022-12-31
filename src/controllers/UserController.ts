import { Usuario } from "@prisma/client";
import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { LoginService } from "../services/LoginService";
import { ProfileUserService } from "../services/ProfileUserService";
import { RemoveUserService } from "../services/RemoveUserService";
import { UpdateUserService } from "../services/UpdateUserService";

class UserController {
    async create(request: Request, response: Response) {
        const { email, senha, nome, telefone, foto } = request.body;
        const service = new CreateUserService();
        try {
            const token = await service.execute({email, senha, nome, telefone, foto});
            return response.json(token);
        } catch (err) {
            return response.json({erro: err.message})
        }
    }

    async read(request: Request, response: Response) {
        const { email, senha } = request.body;
        const service = new LoginService();
        try {
            const token = await service.execute({email, senha});
            return response.json(token);
        } catch (error) {
            return response.json({erro: error.message});
        }
    }

    async profile(request: Request, response: Response) {
        const { user_id } = request;
        const profileUserService = new ProfileUserService();
        try {
            const user = await profileUserService.execute(user_id);
            return response.json(user);
        } catch (err) {
            return response.json({erro: err.message});
        }
    }

    async update(request: Request, response: Response) {
        const { email, senha, nome, telefone, foto } = request.body;
        const { user_id } = request;
        const newUser: Usuario = {
            id: user_id,
            email,
            senha,
            nome,
            telefone,
            foto
        }
        const updateUserService = new UpdateUserService();
        try {
            const result = await updateUserService.execute(newUser);
            return response.json(result);
        } catch (err) {
            return response.json({erro: err.message});
        }
    }

    async delete(request: Request, response: Response) {
        const { user_id } = request;
        const removeUserService = new RemoveUserService();
        try {
            const message = await removeUserService.execute(user_id);
            return response.json({ message });
        } catch (err) {
            return response.json({erro: err.message});
        }
    }
}   

export { UserController }
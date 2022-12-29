import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import "dotenv/config";

interface IPayLoad {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authToken = request.headers.authorization;
    const key ="477bf88e019e0742b0f696e3bca1b12c";

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, key) as IPayLoad;
        request.user_id = sub;
        return next();
    } catch (error) {
        return response.status(401).end();
    }

}
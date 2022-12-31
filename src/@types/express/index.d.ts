declare namespace Express {
    export interface Request {
        user_id: string;
        query: {
            id?: number;
        }
    }
}

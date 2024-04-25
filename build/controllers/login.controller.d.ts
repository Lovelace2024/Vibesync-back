import { Request, Response } from 'express';
declare function loginUser(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export { loginUser };

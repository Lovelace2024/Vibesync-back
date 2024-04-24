import { NextFunction, Request, Response } from 'express';
declare const errorHandler: (error: any, req: Request, response: Response, next: NextFunction) => Promise<void>;
export default errorHandler;

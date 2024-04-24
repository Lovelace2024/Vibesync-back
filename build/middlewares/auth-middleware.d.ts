import { Request, Response } from 'express';
export declare const authMiddleware: (req: Request, res: Response, next: any) => Response<any, Record<string, any>> | undefined;

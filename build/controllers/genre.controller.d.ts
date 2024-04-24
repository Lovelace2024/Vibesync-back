import { Request, Response } from "express";
export declare const addGenre: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllGenres: (req: Request, res: Response) => Promise<void>;
export declare const updateGenre: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteGenre: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;

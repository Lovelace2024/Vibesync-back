import { Request, Response } from "express";
export declare const addAlbum: (req: Request, res: Response) => Promise<void>;
export declare const getAllAlbums: (req: Request, res: Response) => Promise<void>;
export declare const getAlbum: (req: Request, res: Response) => Promise<void>;
export declare const updateAlbum: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteAlbum: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;

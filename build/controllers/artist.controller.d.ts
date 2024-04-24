import { Request, Response } from 'express';
declare const getArtists: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const getArtist: (req: Request, res: Response) => Promise<void>;
declare const createArtist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const updateArtist: (req: Request, res: Response) => Promise<void>;
declare const deleteArtist: (req: Request, res: Response) => Promise<void>;
export { getArtists, getArtist, createArtist, updateArtist, deleteArtist };

import { Request, Response } from "express";
export declare const createPlaylist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllPlaylists: (req: Request, res: Response) => Promise<void>;
export declare const getPlaylist: (req: Request, res: Response) => Promise<void>;
export declare const updatePlaylist: (req: Request, res: Response) => Promise<void>;
export declare const deletePlaylist: (req: Request, res: Response) => Promise<void>;
export declare const addSongToPL: (req: Request, res: Response) => void;
export declare const removeSongfromPL: (req: Request, res: Response) => void;

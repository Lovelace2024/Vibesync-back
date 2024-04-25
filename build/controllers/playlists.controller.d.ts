import { Request, Response } from "express";
export declare const createPlaylist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllPlaylists: (req: Request, res: Response) => Promise<void>;
export declare const getAllPlaylistsForUser: (req: Request, res: Response) => Promise<void>;
export declare const getPlaylist: (req: Request, res: Response) => Promise<void>;
export declare const updatePlaylist: (req: Request, res: Response) => Promise<void>;
export declare const deletePlaylist: (req: Request, res: Response) => Promise<void>;
export declare const addTrackToPlaylist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const removeTrackfromPlaylist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;

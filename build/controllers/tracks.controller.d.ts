import { Request, Response } from "express";
export declare const createTracks: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllTracks: (req: Request, res: Response) => Promise<void>;
export declare const getAllTracksByArtist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getTrack: (req: Request, res: Response) => Promise<void>;
export declare const updateTracks: (req: Request, res: Response) => Promise<void>;
export declare const deleteTracks: (req: Request, res: Response) => Promise<void>;

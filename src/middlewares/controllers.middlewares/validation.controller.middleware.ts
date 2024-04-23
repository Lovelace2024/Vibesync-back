import { Request, Response, NextFunction } from 'express';

export const validateCreateTrackRequest = (req: Request, res: Response, next: NextFunction) => {
    const { name, artistId, url, thumbnail, genreId, albumId } = req.body;
    const missingFields = [];

    if (!name) missingFields.push('name');
    if (!artistId) missingFields.push('artistId');
    if (!url) missingFields.push('url');
    if (!thumbnail) missingFields.push('thumbnail');
    if (!genreId) missingFields.push('genreId');
    if (!albumId) missingFields.push('albumId');

    if (missingFields.length > 0) {
        return res.status(400).json({ message: `Missing required fields: ${missingFields.join(', ')}` });
    }

    next();
};

import { v2 as cloudinary } from 'cloudinary';
import jwt from 'jsonwebtoken';
import fs from 'fs-extra';
import { Request, Response } from 'express'



interface CustomRequest extends Request {
    files: any; // Add the 'files' property to the type definition
}

async function postFile(req: CustomRequest | Request, res: Response) {

    try {
        const file = req.files?.file;
        if (!file) {
            return res.status(400).send('No file uploaded');
        }

        const result = await cloudinary.uploader.upload(file.tempFilePath);
        await fs.unlink(file.tempFilePath);
        res.status(200).json({ url: result.secure_url });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}

export { postFile }
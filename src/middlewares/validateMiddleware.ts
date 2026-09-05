import { Request, Response, NextFunction } from "express";


export const  validateMiddleware = (req: Request, res:Response, next: NextFunction) => {

            try {
                const { url } = req.body;
                const urlLink = new URL(url);
                if (urlLink.protocol === "http:" || urlLink.protocol === "https:") {
                    next();
                } 
            } catch (err) {
                return res.status(400).send(err);
            }
}
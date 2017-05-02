import {Request, Response, NextFunction} from 'express';

export default class DataHandler {
    public getTestData(req: Request, res: Response, next: NextFunction) {
        setTimeout(() => res.json({data: {content: "Hello"}}), 3000);
    }
}
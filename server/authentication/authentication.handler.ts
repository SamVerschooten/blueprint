import {Request, Response, NextFunction} from 'express';

export default class AuthenticationHandler {
    public getAuthenticated(req: Request, res: Response, next: NextFunction) {
        res.json({data: {authenticated: true}});
    }
}
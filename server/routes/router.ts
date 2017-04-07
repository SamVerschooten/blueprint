import * as path from "path";
import {Router, Request, Response, NextFunction} from 'express';
import * as authRouter from "./authRouter";
import * as apiRouter from "./apiRouter";

let router = Router();

const allowedOrigins = ['http://localhost:3000'];
router.use(function (request: Request, response: Response, next: NextFunction) {
    let origin = request.headers['origin'];
    if (allowedOrigins.indexOf(origin) > -1) {
        response.setHeader('Access-Control-Allow-Origin', origin);
    }
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

// first all non root ('/') route definitions
router.use('/auth', authRouter);
router.use('/api', apiRouter);

// at last, anything else under root route '/'
// to facilitate the Angular 2 HTML 5 routing
router.get("/*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../', 'index.html'));
});

export = router;
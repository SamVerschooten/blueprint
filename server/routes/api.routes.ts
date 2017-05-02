import {Router} from 'express';
import DataHandler from '../data/data.handler';

export class ApiRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get('/test', (req, res, next) => new DataHandler().getTestData(req, res, next));
    }
}

export default new ApiRoutes().router;
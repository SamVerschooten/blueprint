import {Router} from 'express';
import AuthenticationHandler from "../authentication/authentication.handler";

export class AuthRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get('/', (req, res, next) => new AuthenticationHandler().getAuthenticated(req, res, next));
    }
}

export default new AuthRoutes().router;
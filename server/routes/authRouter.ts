import {Router, Request, Response} from 'express';

let router = Router();
router.get('/', (req: Request, res: Response) => {
    res.json({data: {authenticated: true}});
});

export = router;
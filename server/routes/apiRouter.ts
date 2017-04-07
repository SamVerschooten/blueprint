import {Router, Request, Response} from 'express';

let router = Router();
router.get('/test', function (req: Request, res: Response) {
    res.json({data: {test: "Hello"}});
});

export = router;
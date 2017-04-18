import {Router, Request, Response} from 'express';

let router = Router();
router.get('/test', function (req: Request, res: Response) {
    setTimeout(() => res.json({data: {content: "Hello"}}), 3000);
});

export = router;
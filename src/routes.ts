import { Router, Response } from 'express';

const router = Router();

router.get('/list', (res: Response) => {
    return res.json({ ok: true })
});

export { router };
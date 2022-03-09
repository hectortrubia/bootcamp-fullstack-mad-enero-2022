import express, { application } from 'express';
import { middleware } from '../middleware/middleware.js';

const router = express.Router();
app.use(middleware)

router.route('/')
    .get( middleware, (req, res) => {
        res.send('Hola Router');

    })

export default router;
import express, { Request, Response } from 'express'
const app = express()

app.use(express.json());

import { userRoute } from './modules/user/userRoute.js';

app.use('/user', userRoute);

app.get('/api', (req: Request, res: Response) => {
    res.status(200).json({message: 'bem-vindo a API!'})
})

app.listen(3000, () => {
    console.log('sever listen in port 3000')
});


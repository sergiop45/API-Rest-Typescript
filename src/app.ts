import express, { Request, Response } from 'express'
const app = express()
import  sequelize  from './database/db.js';

try {
    sequelize.authenticate()
    .then(() => console.log('conexão com banco de dados realizada!'))
} catch (error) {
    console.error('Não foi possivel conectar com banco de dados! Erro: ', error)
}

app.use(express.json());

import { userRoute } from './modules/user/userRoute.js';

app.use('/user', userRoute);

app.get('/api', (req: Request, res: Response) => {
    res.status(200).json({message: 'bem-vindo a API!'})
})

app.listen(3000, () => {
    console.log('sever listen in port 3000')
});


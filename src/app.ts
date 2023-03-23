import express, { Request, Response } from 'express';
import { userRoute } from './modules/user/userRoute.js';
const app = express();
import  sequelize  from './database/db.js';
import * as dotenv from 'dotenv';
import { loginRouter } from './modules/login/loginRoute.js';
dotenv.config()


try{
    sequelize.authenticate()
    .then(() => console.log('conexão com banco de dados realizada!'))
} catch (error) {
    console.error('Não foi possivel conectar com banco de dados! Erro: ', error)
}

app.use(express.json());



app.use('/user', userRoute);
app.use('/login', loginRouter);

app.get('/api', (req: Request, res: Response) => {
    res.status(200).json({message: 'bem-vindo a API!'})
})

app.listen(3000, () => {
    console.log('sever listen in port 3000')
});


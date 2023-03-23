import { Request, Response } from "express";
import { UserModel } from "../../database/Models/UserModel.js";
import bcrypt from 'bcrypt';

export const Login = async (req: Request, res: Response) => {

    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).send({ mensagem: 'Nome e senha são obrigatórios' });
    }

    const user = await UserModel.findOne({where: { email }});

    if(!user) {

        res.json({message: 'Usuario ou senha incorretos'});

    } else {

        bcrypt.compare(password, user.password, (err, result) => {

            if(err) {
                res.json({message: 'Erro ao tentar login! Tente novamente.'});
            } else {
                if(result) {
                    res.json({message: 'Login Realizado!'})
                } else {
                    res.json({message: 'erro'})
                }

            }

        });


    }

}

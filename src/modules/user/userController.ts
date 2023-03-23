import { Request, Response } from 'express'
import { Hash, randomUUID } from 'crypto';
import { UserModel } from '../../database/Models/UserModel.js';
import  bcrypt  from 'bcrypt';


export const userIndex = async (req: Request, res: Response) => {
    const users = await UserModel.findAll()
    res.json(users);
}

export const userCreate = async (req: Request, res: Response) => {
    const newuser  = req.body;

    newuser.password = await bcrypt.hash(newuser.password, 10);

    try {

        const user = await UserModel.create(newuser);
        res.status(201).json({message: 'user created!', user})

    } catch (error) {
        res.status(500).json({message: "Erro ao tentar criar usuario! erro: "+error});

    }

}

export const userShow = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await UserModel.findByPk(id);

    if(!user) {
        res.status(404).json({message: "usuario não encontrado!"});
    } else {
        res.json(user);
    }

}

export const userDelete = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {

        const user = await UserModel.findByPk(id);
        if(!user) {
            res.status(404).json({message: "usuario não encontrado!"});
        } else {
            await user.destroy();
            res.json({message: 'user deleted!'});
        }

    } catch (error) {
        res.status(500).json({message: "Erro ao tentar deletar usuario! erro: "+error});
    }


}

export const userUpdate = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {

        const user = await UserModel.findByPk(id);

        if(!user) {
            res.status(404).json({message: "usuario não encontrado!"});
        } else {
            await user.update({name, email, password});
            res.status(200).json({message: "usuario atualizado!"});
        }

    } catch (error) {
        res.status(500).json({message: "Erro ao atualizar usuario!"});
    }

}

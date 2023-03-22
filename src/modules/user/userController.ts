import { Request, Response } from 'express'
import { randomUUID } from 'crypto';

interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
}

const userMemory: IUser[] = []

export const userIndex = async (req: Request, res: Response) => {
    res.json(userMemory);
}

export const userCreate = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const id = randomUUID()

    userMemory.push({ id, name, email, password })
    res.status(200).json({message: 'user created!'})
}

export const userShow = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = userMemory.find(user => user.id === id)
    res.json(user);
}

export const userDelete = async (req: Request, res: Response) => {
    const { id } = req.params;

    const indexUser = userMemory.findIndex(user => user.id === id)
    userMemory.splice(indexUser, 1)
    res.json({message: 'user deleted!'})
}

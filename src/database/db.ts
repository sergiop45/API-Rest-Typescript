import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
dotenv.config()
import { UserModel } from './Models/UserModel.js';

const password = process.env.PASSWORD;
const host = process.env.HOST;
const database = process.env.DATABASE as string;

const sequelize = new Sequelize(database, 'root', password, {
  host: host,
  dialect: 'mysql',
});

sequelize.addModels([UserModel])


export default sequelize;

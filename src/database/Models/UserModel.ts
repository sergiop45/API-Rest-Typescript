import { Model, Column, Table, DataType } from "sequelize-typescript";
import IUser from "../../Interfaces/IUser";

@Table
export class UserModel extends Model<UserModel> {

    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.STRING)
    email!: string;

    @Column(DataType.STRING)
    password!: string;
}

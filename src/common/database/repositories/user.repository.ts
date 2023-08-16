import { injectable } from "tsyringe";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils/database";
import userSchema from "../schemas/user.schema";
import User from "../models/user.model";

@injectable()
export default class UserRepository {

    constructor(){
    }

    async addUser(payload: User): Promise<User>{
        const User = await createData(userSchema, payload);
        return User;
    }

    async getUsers(payload: User): Promise<User[]>{
        const Users = await readData(userSchema, payload);
        return Users;
    }

    async getUser(payload: User): Promise<User> {
        const User = await readsingleData(userSchema, payload);
        return User;
    }

    async updateUser(keyword: any, data: User): Promise<User>{
        const User = await updateData(userSchema, keyword, data);
        return User;
    }

    async deleteUser(id: string){
        const User = await deleteData(userSchema, {_id: id});
        return User;
    }

}
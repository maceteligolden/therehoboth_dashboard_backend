import { injectable } from "tsyringe";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils/database";
import userSchema from "../schemas/blog.schema";
import Blog from "../models/blog.model";

@injectable()
export default class BlogRepository {

    constructor(){
    }

    async addBlog(payload: Blog): Promise<Blog>{
        const User = await createData(userSchema, payload);
        return User;
    }

    async getBlogs(payload: Blog): Promise<Blog[]>{
        const Users = await readData(userSchema, payload);
        return Users;
    }

    async getBlog(payload: Blog): Promise<Blog> {
        const User = await readsingleData(userSchema, payload);
        return User;
    }

    async updateBlog(keyword: any, data: Blog): Promise<Blog>{
        const User = await updateData(userSchema, keyword, data);
        return User;
    }

    async deleteBlog(id: string){
        const User = await deleteData(userSchema, {_id: id});
        return User;
    }

}
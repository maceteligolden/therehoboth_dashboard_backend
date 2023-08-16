import { injectable } from "tsyringe";
import { Request, Response } from "express";
import IService from "../../common/interfaces/service.interface";
import Http from "../../common/helper/http.helper";
import BlogRepository from "../../common/database/repositories/blog.repository";


@injectable()
export default class CreateBlogService implements IService<Request, Response> {
    constructor(
        private blogRepository: BlogRepository,
        private httpHelper: Http
    ){

    }

    async execute(req: Request, res: Response){
        try{
            const {
                title,
                content
            } = req.body;
            console.log(req.body)
            const data = await this.blogRepository.addBlog({
                title,
                content
            })

            console.log(data)

            this.httpHelper.Response({
                res,
                status: "success",
                message: "successfully create blog post",
                data
            })
 
        }catch(err: any){
            this.httpHelper.Response({
                res,
                status: "error",
                message: err.message
            })
        }
    }
}
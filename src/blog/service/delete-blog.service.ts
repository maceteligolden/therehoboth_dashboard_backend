import { injectable } from "tsyringe";
import { Request, Response } from "express";
import IService from "../../common/interfaces/service.interface";
import Http from "../../common/helper/http.helper";
import BlogRepository from "../../common/database/repositories/blog.repository";


@injectable()
export default class DeleteBlogService implements IService<Request, Response> {
    constructor(
        private blogRepository: BlogRepository,
        private httpHelper: Http
    ){

    }

    async execute(req: Request, res: Response){
        try{
            const { id } = req.params;
            console.log('id '+ id)
            const response = await this.blogRepository.deleteBlog(id)
            console.log('response '+ response)
            this.httpHelper.Response({
                res,
                status: "success",
                message: "successfully deleted blog post",
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
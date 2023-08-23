import { injectable } from "tsyringe";
import { Request, Response } from "express";
import IService from "../../common/interfaces/service.interface";
import Http from "../../common/helper/http.helper";
import BlogRepository from "../../common/database/repositories/blog.repository";
import generateExcerpt from "../../common/utils/generate-excerpt";


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

            // generate excerpt from blog content
            const excerpt = generateExcerpt(content);
            
            const data = await this.blogRepository.addBlog({
                title,
                content,
                excerpt
            })

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
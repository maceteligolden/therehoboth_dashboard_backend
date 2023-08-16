import { injectable } from "tsyringe";
import { Request, Response } from "express";
import CreateBlogService from "../service/create-blog.service";
import GetBlogService from "../service/get-blog.service";
import GetBlogsService from "../service/get-blogs.service";
import DeleteBlogService from "../service/delete-blog.service";
import UpdateBlogService from "../service/update-blog.service";

@injectable()
export default class BlogController {
    constructor(
        private createBlogService: CreateBlogService,
        private getBlogService: GetBlogService,
        private getBlogsService: GetBlogsService,
        private deleteBlogService: DeleteBlogService,
        private updateBlogService: UpdateBlogService
    ){

    }

    async createBlog(req: Request, res: Response){
        await this.createBlogService.execute(req, res)
    }

    async updateBlog(req: Request, res: Response){
        await this.updateBlogService.execute(req, res)
    }

    async deleteBlog(req: Request, res: Response){
        await this.deleteBlogService.execute(req, res)
    }

    async getBlog(req: Request, res: Response){
        await this.getBlogService.execute(req, res)
    }

    async getBlogs(req: Request, res: Response){
        await this.getBlogsService.execute(req, res)
    }
}
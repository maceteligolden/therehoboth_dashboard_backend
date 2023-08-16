import { Router, Response, Request } from "express";
import { container } from "tsyringe";
import BlogController from "../controller/blog.controller";

const blogRouter = Router();
const blogController = container.resolve(BlogController);

blogRouter.post('/create', (req: Request, res: Response) => blogController.createBlog(req, res));
blogRouter.patch('/:id', (req: Request, res: Response) => blogController.updateBlog(req, res));
blogRouter.delete('/:id', (req: Request, res: Response) => blogController.deleteBlog(req, res));
blogRouter.get('/', (req: Request, res: Response) => blogController.getBlogs(req, res));
blogRouter.get('/:id', (req: Request, res: Response) => blogController.getBlog(req, res));

export default blogRouter

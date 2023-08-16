import { Application } from "express";
import authRouter, { dashboardRouter } from "../auth/routes/auth.route";
import blogRouter from "../blog/route/blog.route";

const BASE_URL = "/api/v1";

export const setAppRouter = (app: Application) => {
    app.use(`${BASE_URL}/auth`, authRouter);
    app.use(`${BASE_URL}/dashboard`, dashboardRouter);
    app.use(`${BASE_URL}/blogs`, blogRouter);
}
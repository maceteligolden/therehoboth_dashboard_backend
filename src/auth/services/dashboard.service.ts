import { injectable } from "tsyringe";
import { Request, Response } from "express";
import IService from "../../common/interfaces/service.interface";
import Http from "../../common/helper/http.helper";


@injectable()
export default class DashboardService implements IService<Request, Response> {
    constructor(
        private httpHelper: Http,
        
    ){}

    async execute(req: Request, res: Response) {
        try {

         
            
            this.httpHelper.Response({
                res,
                status: "error",
                message: "successfully fetch dashboard data",
                data: {
                 
                }
            });
        }catch(err: any){
            this.httpHelper.Response({
                res,
                status: "error",
                message: err.message
            });
        }
    }
}
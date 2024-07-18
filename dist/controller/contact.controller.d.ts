import { MulterRequest } from "interfaces/multer.interface";
import { Response, Request } from 'express';
export declare function saveContact(req: MulterRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function findAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function findOne(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function changeLikeContact(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;

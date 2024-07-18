import { MulterRequest } from "interfaces/multer.interface";
import { Response } from 'express';
export declare function saveContact(req: MulterRequest, res: Response): Promise<string | Response<any, Record<string, any>>>;

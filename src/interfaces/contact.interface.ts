import { Document } from "mongoose";

export interface ContactInterface {
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;
    liked:boolean;
}
export interface ContactBody{
    email:string;
    first_name:string;
    last_name:string;
    liked:boolean;
}
export interface Image{
    fieldname:string;
    encoding:string;
    mimetype:string;
    buffer:Buffer;
    size:number
}

export interface IcontactModel extends Document{
    id:number;
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;
    liked:boolean;
}
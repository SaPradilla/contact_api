

import { Application } from "express";
import express from 'express';
import cors from 'cors';
import Routes from './routes'


export class Server {

    public readonly app : Application;
    public readonly port: number;

    constructor( port:number ){
        this.port = port;
        this.app = express();   
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
    connection(){

        this.middlewares();
        this.app.use('/api/v1',Routes)
        // iniciar el server
        this.app.listen(this.port,()=>{
            console.log(`Server running in http://localhost:${this.port}`)  
        })

    }


}
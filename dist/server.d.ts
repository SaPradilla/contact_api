import { Application } from "express";
export declare class Server {
    readonly app: Application;
    readonly port: number;
    constructor(port: number);
    middlewares(): void;
    connection(): void;
}

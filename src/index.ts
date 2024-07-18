import { MongoDatabase } from "../src/data/mongodb/mongo-database"
import { Server } from "../src/server";
import { envs } from './config/envs';

// Funcion anonima autoinvocada
(()=>{
    main()
})()

async function main(){
    // Conexion db
    await MongoDatabase.connect(envs.DB_CNN_STRING);
    
    // server 
    const server = new Server(envs.PORT);
    server.connection();
}
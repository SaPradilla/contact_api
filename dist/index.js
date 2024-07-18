"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_database_1 = require("../src/data/mongodb/mongo-database");
const server_1 = require("../src/server");
const envs_1 = require("./config/envs");
// Funcion anonima autoinvocada
(() => {
    main();
})();
async function main() {
    // Conexion db
    await mongo_database_1.MongoDatabase.connect(envs_1.envs.DB_CNN_STRING);
    // server 
    const server = new server_1.Server(envs_1.envs.PORT);
    server.connection();
}
//# sourceMappingURL=index.js.map
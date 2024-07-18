"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
class Server {
    app;
    port;
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    connection() {
        this.middlewares();
        this.app.use('/api/v1', routes_1.default);
        // iniciar el server
        this.app.listen(this.port, () => {
            console.log(`Server running in http://localhost:${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map
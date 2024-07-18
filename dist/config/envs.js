"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const env_var_1 = require("env-var");
exports.envs = {
    PORT: (0, env_var_1.get)('PORT').required().asPortNumber(),
    DB_CNN_STRING: (0, env_var_1.get)('DB_CNN_STRING').required().asString(),
    JWT_KEY: (0, env_var_1.get)('JWT_KEY').required().asString(),
    API_SECRET: (0, env_var_1.get)('API_SECRET').required().asString(),
    API_KEY: (0, env_var_1.get)('API_KEY').required().asString(),
    CLOUD_NAME: (0, env_var_1.get)('CLOUD_NAME').required().asString(),
};
//# sourceMappingURL=envs.js.map
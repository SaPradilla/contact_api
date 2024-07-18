"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comprobarJWT = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const envs_1 = require("../config/envs");
function comprobarJWT(token = '') {
    try {
        const { username } = (0, jsonwebtoken_1.verify)(token, envs_1.envs.JWT_KEY);
        return [true, username];
    }
    catch (error) {
        return [false, null];
    }
}
exports.comprobarJWT = comprobarJWT;
//# sourceMappingURL=jwt.js.map
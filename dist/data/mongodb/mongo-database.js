"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class MongoDatabase {
    static async connect(mongoUrl) {
        try {
            await mongoose_1.default.connect(mongoUrl);
            console.log('Mongo connected C:');
            return true;
        }
        catch (error) {
            console.log('Mongo connection');
            throw error;
        }
    }
}
exports.MongoDatabase = MongoDatabase;
//# sourceMappingURL=mongo-database.js.map
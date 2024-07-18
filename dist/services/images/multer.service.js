"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
// Importacion de cloudinary
const cloudinary_1 = require("cloudinary");
// Importar Multer
const multer_1 = __importDefault(require("multer"));
// Configuracion del cloundinary
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
// Metodo para configurar la imagen
// Almacenamiento en memoria, ya que Cloudinary lo necesita así
const fileStorage = multer_1.default.memoryStorage();
// Metodo para subir la imagen con la configuracion
exports.upload = (0, multer_1.default)({
    storage: fileStorage,
    // Detecta si la imagen tiene la extensión correcta
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
            cb(null, true);
        }
        else {
            cb(new Error('Formato No Válido'));
        }
    },
}).single('image');
//# sourceMappingURL=multer.service.js.map
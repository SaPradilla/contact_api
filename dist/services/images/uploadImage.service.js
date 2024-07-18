"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImages = void 0;
const upload_cloudinary_service_1 = require("./upload-cloudinary.service");
async function uploadImages(image) {
    try {
        // Subir la imagen
        const img = await (0, upload_cloudinary_service_1.uploadCloudinary)(image);
        return img;
    }
    catch (error) {
        throw new Error('Error al subir las imágenes a Cloudinary', error.message);
    }
}
exports.uploadImages = uploadImages;
//# sourceMappingURL=uploadImage.service.js.map
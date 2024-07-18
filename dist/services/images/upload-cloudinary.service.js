"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const uploadCloudinary = async (image) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary_1.v2.uploader.upload_stream({ resource_type: 'auto', folder: 'contacts_avatar' }, (error, result) => {
            if (error) {
                console.log('se ejecuto');
                console.log(error);
                reject(new Error('Error al subir la imagen a Cloudinary'));
            }
            else {
                console.log('se ejecuto');
                resolve(result.secure_url);
            }
        });
        uploadStream.end(image.buffer);
    });
};
exports.uploadCloudinary = uploadCloudinary;
//# sourceMappingURL=upload-cloudinary.service.js.map
import {v2 as cloudinary, UploadApiErrorResponse, UploadApiResponse} from 'cloudinary';
import { Image } from '../../interfaces/contact.interface';

export const uploadCloudinary = async(image:Image):Promise<string> => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { resource_type: 'auto', folder: 'contacts_avatar' },
            (error, result) => {
                if (error) {
                    reject(new Error('Error al subir la imagen a Cloudinary'));
                } else {
                    resolve(result.secure_url);
                }
            }
        );

        uploadStream.end(image.buffer);
    });
}
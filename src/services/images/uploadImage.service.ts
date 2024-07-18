import { Image } from "interfaces/contact.interface";
import { uploadCloudinary } from "./upload-cloudinary.service";


export async function uploadImages(image:Image):Promise<string> {

  try {
    // Subir la imagen
    const img = await uploadCloudinary(image)
    return img;
    
  } catch (error) {
    throw new Error('Error al subir las imágenes a Cloudinary',error.message)
  }

}
// Importacion de cloudinary
import {v2 as cloudinary} from 'cloudinary';
import {envs} from '../../config/envs';
// Importar Multer
import multer from 'multer';

// Configuracion del cloundinary
cloudinary.config({
    cloud_name: envs.CLOUD_NAME,
    api_key: envs.API_KEY,
    api_secret: envs.API_SECRET,
});

// Metodo para configurar la imagen
// Almacenamiento en memoria, ya que Cloudinary lo necesita así
const fileStorage = multer.memoryStorage();

// Metodo para subir la imagen con la configuracion
export const upload = multer({

    storage: fileStorage,
    // Detecta si la imagen tiene la extensión correcta
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
            cb(null, true);
        } else {
            cb(new Error('Formato No Válido'));
        }

    },
}).single('image');


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewContact = void 0;
const validate_body_1 = require("../../helpers/validate-body");
const uploadImage_service_1 = require("../images/uploadImage.service");
async function createNewContact(image, contactBody) {
    try {
        // Validar datos del body
        const errors = (0, validate_body_1.validateBody)(contactBody, image);
        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }
        // TODO: SUBIR IMAGEN
        const imageCreatedUrl = await (0, uploadImage_service_1.uploadImages)(image);
        // console.log(imageCreatedUrl)
        // // TODO: validar no exista un usuario con el mismo correo
        // const findEmail = await findEmailContact(contactBody.email);
        // if(findEmail) throw new Error('Email already used')     
        // // TODO: Mapear user
        // const newContactData:ContactInterface = {
        //     ...contactBody,
        //     avatar:imageCreatedUrl
        // }
        // // TODO: CREAR CONTACTO
        // const newContact = await createContact(newContactData);
        // return newContact
        return '';
    }
    catch (error) {
        throw error;
    }
}
exports.createNewContact = createNewContact;
//# sourceMappingURL=contact.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchLikeContact = exports.findContact = exports.findContacts = exports.createNewContact = void 0;
const validate_body_1 = require("../../helpers/validate-body");
const contact_repository_1 = require("../../repositories/contact.repository");
const uploadImage_service_1 = require("../images/uploadImage.service");
async function createNewContact(image, contactBody) {
    try {
        // Validaciones datos del body
        const errors = (0, validate_body_1.validateBody)(contactBody, image);
        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }
        const findEmail = await (0, contact_repository_1.findEmailContact)(contactBody.email);
        if (findEmail)
            throw new Error('Email already used');
        const imageCreatedUrl = await (0, uploadImage_service_1.uploadImages)(image);
        const newContactData = {
            ...contactBody,
            avatar: imageCreatedUrl
        };
        const newContact = await (0, contact_repository_1.createContact)(newContactData);
        return newContact;
    }
    catch (error) {
        throw error;
    }
}
exports.createNewContact = createNewContact;
async function findContacts() {
    try {
        const contacts = await (0, contact_repository_1.findAllContacts)();
        return contacts;
    }
    catch (error) {
        throw error;
    }
}
exports.findContacts = findContacts;
async function findContact(contactId) {
    try {
        const contact = await (0, contact_repository_1.findOneContact)(contactId);
        if (!contact)
            throw new Error('Contact not found.');
        return contact;
    }
    catch (error) {
        throw error;
    }
}
exports.findContact = findContact;
async function switchLikeContact(contactId) {
    try {
        // buscar el user y validar que este
        const findContactLike = await findContact(contactId);
        // actualiza el like
        await (0, contact_repository_1.updateLikedContact)(contactId, findContactLike.liked);
    }
    catch (error) {
        throw error;
    }
}
exports.switchLikeContact = switchLikeContact;
//# sourceMappingURL=contact.service.js.map
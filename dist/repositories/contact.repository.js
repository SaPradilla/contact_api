"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEmailContact = exports.createContact = void 0;
const contact_model_1 = require("../models/contact.model");
async function createContact(contactBody) {
    const newContact = new contact_model_1.ContactModel({
        email: contactBody.email,
        first_name: contactBody.first_name,
        last_name: contactBody.last_name,
        avatar: contactBody.avatar,
        liked: contactBody.liked
    });
    try {
        const saveContact = await newContact.save();
        return saveContact;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
exports.createContact = createContact;
async function findEmailContact(contactEmail) {
    try {
        const findContact = await contact_model_1.ContactModel.findOne({ email: contactEmail });
        return findContact;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}
exports.findEmailContact = findEmailContact;
//# sourceMappingURL=contact.repository.js.map
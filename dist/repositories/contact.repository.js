"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLikedContact = exports.findOneContact = exports.findAllContacts = exports.findEmailContact = exports.createContact = void 0;
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
        throw err;
    }
}
exports.findEmailContact = findEmailContact;
async function findAllContacts() {
    try {
        const contacts = await contact_model_1.ContactModel.find();
        return contacts;
    }
    catch (err) {
        throw err;
    }
}
exports.findAllContacts = findAllContacts;
async function findOneContact(contactId) {
    try {
        const contact = await contact_model_1.ContactModel.findOne({ id: contactId });
        return contact;
    }
    catch (err) {
        throw err;
    }
}
exports.findOneContact = findOneContact;
async function updateLikedContact(contactId, like) {
    try {
        await contact_model_1.ContactModel.updateOne({ id: contactId }, { $set: { liked: !like } });
    }
    catch (err) {
        throw err;
    }
}
exports.updateLikedContact = updateLikedContact;
//# sourceMappingURL=contact.repository.js.map
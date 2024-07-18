"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeLikeContact = exports.findOne = exports.findAll = exports.saveContact = void 0;
const contact_service_1 = require("../services/contact/contact.service");
async function saveContact(req, res) {
    const contactBody = req.body;
    const image = req.file;
    try {
        const newContact = await (0, contact_service_1.createNewContact)(image, contactBody);
        return res.status(201).json(newContact);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
exports.saveContact = saveContact;
async function findAll(req, res) {
    try {
        const contacts = await (0, contact_service_1.findContacts)();
        return res.status(200).json(contacts);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
exports.findAll = findAll;
async function findOne(req, res) {
    const { id } = req.params;
    try {
        const contact = await (0, contact_service_1.findContact)(parseInt(id));
        return res.status(200).json(contact);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
exports.findOne = findOne;
async function changeLikeContact(req, res) {
    const { id } = req.params;
    try {
        await (0, contact_service_1.switchLikeContact)(parseInt(id));
        return res.status(200).json('liked update!');
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
exports.changeLikeContact = changeLikeContact;
//# sourceMappingURL=contact.controller.js.map
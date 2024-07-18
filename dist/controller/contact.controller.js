"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveContact = void 0;
const contact_service_1 = require("../services/contact/contact.service");
async function saveContact(req, res) {
    const contactBody = req.body;
    const image = req.file;
    try {
        const newContact = await (0, contact_service_1.createNewContact)(image, contactBody);
        return newContact;
    }
    catch (error) {
        // console.log('error',error.message)
        return res.status(500).json({ error: error.message });
    }
}
exports.saveContact = saveContact;
//# sourceMappingURL=contact.controller.js.map
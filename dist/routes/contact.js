"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../controller");
const express_1 = require("express");
const multer_service_1 = require("../services/images/multer.service");
const router = (0, express_1.Router)();
router
    // create
    .post('/', multer_service_1.upload, controller_1.saveContact)
    // update
    // liked
    .patch('/:id', controller_1.changeLikeContact)
    // getById
    .get('/:id', controller_1.findOne)
    // getAll
    .get('/', controller_1.findAll);
// delete
exports.default = router;
//# sourceMappingURL=contact.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../controller");
const express_1 = require("express");
const multer_service_1 = require("../services/images/multer.service");
const router = (0, express_1.Router)();
router
    .post('/', multer_service_1.upload, controller_1.saveContact);
exports.default = router;
//# sourceMappingURL=contact.js.map
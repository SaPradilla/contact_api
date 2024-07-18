"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const validateBody = (contactBody, imageBody) => {
    const errors = [];
    if (!imageBody) {
        errors.push('Avatar is required');
        ``;
    }
    if (!contactBody.first_name) {
        errors.push('First name is required');
    }
    if (!contactBody.last_name) {
        errors.push('Last name is required');
    }
    if (!contactBody.liked) {
        errors.push('Liked is required');
    }
    return errors;
};
exports.validateBody = validateBody;
//# sourceMappingURL=validate-body.js.map
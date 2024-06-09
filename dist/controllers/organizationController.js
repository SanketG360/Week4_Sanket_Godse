"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerOrganizations = void 0;
const organizationService_1 = require("../services/organizationService");
function registerOrganizations(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const organization = yield (0, organizationService_1.registerOrganization)(req.body);
            res.status(201).json({ message: 'Organization registered successfully', organization });
        }
        catch (error) {
            console.error('Error while registering organization:', error);
            res.status(500).json({ error: 'Internal Server Error!!' });
        }
    });
}
exports.registerOrganizations = registerOrganizations;
//# sourceMappingURL=organizationController.js.map
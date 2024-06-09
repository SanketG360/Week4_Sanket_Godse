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
exports.registerOrganization = void 0;
const organizationModel_1 = require("../models/organizationModel");
function registerOrganization(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const organization = yield organizationModel_1.Organization.create(Object.assign({}, data));
            return organization;
        }
        catch (error) {
            console.error('Error while registering organization!!', error);
            throw error;
        }
    });
}
exports.registerOrganization = registerOrganization;
//# sourceMappingURL=organizationService.js.map
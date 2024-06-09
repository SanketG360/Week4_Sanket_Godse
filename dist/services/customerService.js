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
exports.createCustomer = void 0;
const customerModel_1 = require("../models/customerModel");
function createCustomer(clientData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = yield customerModel_1.Customer.create(clientData);
            return client;
        }
        catch (error) {
            console.error('Error while registering!!', error);
            throw error;
        }
    });
}
exports.createCustomer = createCustomer;
//# sourceMappingURL=customerService.js.map
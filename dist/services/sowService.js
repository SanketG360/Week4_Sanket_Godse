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
exports.deleteSOW = exports.updateSOW = exports.findSOWById = exports.createSOW = void 0;
const sowManagementModel_1 = require("../models/sowManagementModel");
function createSOW(sowData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sow = yield sowManagementModel_1.SOW.create(sowData);
            return sow;
        }
        catch (error) {
            console.error('error while creating sow!!', error);
            throw error;
        }
    });
}
exports.createSOW = createSOW;
function findSOWById(sowId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sow = yield sowManagementModel_1.SOW.findByPk(sowId);
            if (!sow)
                throw new Error('sow not found!!');
            return sow;
        }
        catch (error) {
            console.error('error to finding sow!!', error);
            throw error;
        }
    });
}
exports.findSOWById = findSOWById;
function updateSOW(sowId, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sow = yield findSOWById(sowId);
            if (!sow)
                throw new Error('sow not found!!');
            yield sow.update(updateData);
            return sow;
        }
        catch (error) {
            console.error('error while updating sow!!', error);
            throw error;
        }
    });
}
exports.updateSOW = updateSOW;
function deleteSOW(sowId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sow = yield findSOWById(sowId);
            if (!sow)
                throw new Error('sow not found!!');
            yield sow.destroy();
            return { message: 'sow deleted successfully' };
        }
        catch (error) {
            console.error('error while deleting sow!!', error);
            throw error;
        }
    });
}
exports.deleteSOW = deleteSOW;
//# sourceMappingURL=sowService.js.map
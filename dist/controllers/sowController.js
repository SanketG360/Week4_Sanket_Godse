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
exports.deleteSOWHandler = exports.updateSOWHandler = exports.findSOWByIdHandler = exports.createSOWHandler = void 0;
const sowService_1 = require("../services/sowService");
function createSOWHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowData = req.body;
            const sow = yield (0, sowService_1.createSOW)(sowData);
            res.status(201).json(sow);
        }
        catch (error) {
            console.error('error while creating sow!!', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createSOWHandler = createSOWHandler;
function findSOWByIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowId = req.params.sowId;
            const sow = yield (0, sowService_1.findSOWById)(sowId);
            res.status(200).json(sow);
        }
        catch (error) {
            console.error('error while finding sow!!', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.findSOWByIdHandler = findSOWByIdHandler;
function updateSOWHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowId = req.params.sowId;
            const updateData = req.body;
            const sow = yield (0, sowService_1.updateSOW)(sowId, updateData);
            res.status(200).json({ message: 'sow updated successfully', sow });
        }
        catch (error) {
            console.error('error while updating sow', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updateSOWHandler = updateSOWHandler;
function deleteSOWHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowId = req.params.sowId;
            const result = yield (0, sowService_1.deleteSOW)(sowId);
            res.status(200).json(result);
        }
        catch (error) {
            console.error('error while deleting sow', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deleteSOWHandler = deleteSOWHandler;
//# sourceMappingURL=sowController.js.map
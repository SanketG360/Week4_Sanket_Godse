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
exports.deleteSowPaymentPlanItemHandler = exports.updateSowPaymentPlanItemHandler = exports.findSowPaymentPlanItemsByOrderIdHandler = exports.findSowPaymentPlanItemsBySOWIdHandler = exports.createSowPaymentPlanItemHandler = void 0;
const sowPayPlanItemService_1 = require("../services/sowPayPlanItemService");
function createSowPaymentPlanItemHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowPaymentPlanItemData = req.body;
            const sowPaymentPlanItem = yield (0, sowPayPlanItemService_1.createSowPaymentPlanItem)(sowPaymentPlanItemData);
            res.status(201).json(sowPaymentPlanItem);
        }
        catch (error) {
            console.error('error while creating sow payment plan item:', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createSowPaymentPlanItemHandler = createSowPaymentPlanItemHandler;
function findSowPaymentPlanItemsBySOWIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowId = req.params.sowId;
            const sowPaymentPlanItems = yield (0, sowPayPlanItemService_1.findSowPaymentPlanItemsBySOWId)(sowId);
            res.status(200).json(sowPaymentPlanItems);
        }
        catch (error) {
            console.error('error finding sow payment plan items', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.findSowPaymentPlanItemsBySOWIdHandler = findSowPaymentPlanItemsBySOWIdHandler;
function findSowPaymentPlanItemsByOrderIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const orderId = req.params.orderId;
            const sowPaymentPlanItems = yield (0, sowPayPlanItemService_1.findSowPaymentPlanItemsByOrderId)(orderId);
            res.status(200).json(sowPaymentPlanItems);
        }
        catch (error) {
            console.error('error while finding sow payment plan items', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.findSowPaymentPlanItemsByOrderIdHandler = findSowPaymentPlanItemsByOrderIdHandler;
function updateSowPaymentPlanItemHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const sowPaymentPlanItem = yield (0, sowPayPlanItemService_1.updateSowPaymentPlanItem)(id, updateData);
            res.status(200).json({ message: 'sow payment plan item updated successfully', sowPaymentPlanItem });
        }
        catch (error) {
            console.error('Error updating SOW payment plan item:', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updateSowPaymentPlanItemHandler = updateSowPaymentPlanItemHandler;
function deleteSowPaymentPlanItemHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, sowPayPlanItemService_1.deleteSowPaymentPlanItem)(id);
            res.status(200).json({ message: 'sow payment plan item deleted successfully', result });
        }
        catch (error) {
            console.error('error deleting sow payment plan item', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deleteSowPaymentPlanItemHandler = deleteSowPaymentPlanItemHandler;
//# sourceMappingURL=sowPayPlanItemController.js.map
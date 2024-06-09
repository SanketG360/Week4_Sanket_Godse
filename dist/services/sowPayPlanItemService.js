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
exports.deleteSowPaymentPlanItem = exports.updateSowPaymentPlanItem = exports.findSowPaymentPlanItemsByOrderId = exports.findSowPaymentPlanItemsBySOWId = exports.createSowPaymentPlanItem = void 0;
const sowPayPlanLineItem_1 = require("../models/sowPayPlanLineItem");
function createSowPaymentPlanItem(sowPaymentPlanItemData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowPaymentPlanItem = yield sowPayPlanLineItem_1.SowPaymentPlanItem.create(sowPaymentPlanItemData);
            return sowPaymentPlanItem;
        }
        catch (error) {
            console.error('error while creating sow payment plan item', error);
            throw error;
        }
    });
}
exports.createSowPaymentPlanItem = createSowPaymentPlanItem;
function findSowPaymentPlanItemsBySOWId(sowId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowPaymentPlanItems = yield sowPayPlanLineItem_1.SowPaymentPlanItem.findAll({ where: { sowId } });
            return sowPaymentPlanItems;
        }
        catch (error) {
            console.error('error while finding sow payment plan items', error);
            throw error;
        }
    });
}
exports.findSowPaymentPlanItemsBySOWId = findSowPaymentPlanItemsBySOWId;
function findSowPaymentPlanItemsByOrderId(orderId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowPaymentPlanItems = yield sowPayPlanLineItem_1.SowPaymentPlanItem.findAll({ where: { orderId } });
            return sowPaymentPlanItems;
        }
        catch (error) {
            console.error('error while finding sow payment plan items', error);
            throw error;
        }
    });
}
exports.findSowPaymentPlanItemsByOrderId = findSowPaymentPlanItemsByOrderId;
function updateSowPaymentPlanItem(id, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowPaymentPlanItem = yield sowPayPlanLineItem_1.SowPaymentPlanItem.update(updateData, { where: { id } });
            return sowPaymentPlanItem;
        }
        catch (error) {
            console.error('error while updating sow payment plan item', error);
            throw error;
        }
    });
}
exports.updateSowPaymentPlanItem = updateSowPaymentPlanItem;
function deleteSowPaymentPlanItem(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield sowPayPlanLineItem_1.SowPaymentPlanItem.destroy({ where: { id } });
            return result;
        }
        catch (error) {
            console.error('error while deleting sow payment plan item', error);
            throw error;
        }
    });
}
exports.deleteSowPaymentPlanItem = deleteSowPaymentPlanItem;
//# sourceMappingURL=sowPayPlanItemService.js.map
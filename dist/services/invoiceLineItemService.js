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
exports.deleteInvoiceLineItem = exports.updateInvoiceLineItem = exports.findInvoiceLineItemsByInvoiceId = exports.findInvoiceLineItemById = exports.createInvoiceLineItem = void 0;
const invoiceLineItem_1 = require("../models/invoiceLineItem");
function createInvoiceLineItem(invoiceLineItemData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoiceLineItem = yield invoiceLineItem_1.InvoiceLineItem.create(invoiceLineItemData);
            return invoiceLineItem;
        }
        catch (error) {
            console.error('error while creating invoice line item', error);
            throw error;
        }
    });
}
exports.createInvoiceLineItem = createInvoiceLineItem;
function findInvoiceLineItemById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoiceLineItem = yield invoiceLineItem_1.InvoiceLineItem.findByPk(id);
            return invoiceLineItem;
        }
        catch (error) {
            console.error('error while finding invoice line item', error);
            throw error;
        }
    });
}
exports.findInvoiceLineItemById = findInvoiceLineItemById;
function findInvoiceLineItemsByInvoiceId(invoiceId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoiceLineItems = yield invoiceLineItem_1.InvoiceLineItem.findAll({ where: { invoiceId } });
            return invoiceLineItems;
        }
        catch (error) {
            console.error('error finding invoice line items', error);
            throw error;
        }
    });
}
exports.findInvoiceLineItemsByInvoiceId = findInvoiceLineItemsByInvoiceId;
function updateInvoiceLineItem(id, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoiceLineItem = yield invoiceLineItem_1.InvoiceLineItem.update(updateData, { where: { id } });
            return invoiceLineItem;
        }
        catch (error) {
            console.error('error while updating invoice line item', error);
            throw error;
        }
    });
}
exports.updateInvoiceLineItem = updateInvoiceLineItem;
function deleteInvoiceLineItem(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield invoiceLineItem_1.InvoiceLineItem.destroy({ where: { id } });
            return result;
        }
        catch (error) {
            console.error('error deleting invoice line item', error);
            throw error;
        }
    });
}
exports.deleteInvoiceLineItem = deleteInvoiceLineItem;
//# sourceMappingURL=invoiceLineItemService.js.map
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
exports.deleteInvoiceLineItemHandler = exports.updateInvoiceLineItemHandler = exports.findInvoiceLineItemsByInvoiceIdHandler = exports.findInvoiceLineItemByIdHandler = exports.createInvoiceLineItemHandler = void 0;
const invoiceLineItemService_1 = require("../services/invoiceLineItemService");
function createInvoiceLineItemHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoiceLineItemData = req.body;
            const invoiceLineItem = yield (0, invoiceLineItemService_1.createInvoiceLineItem)(invoiceLineItemData);
            res.status(201).json(invoiceLineItem);
        }
        catch (error) {
            console.error('error while creating invoice line item', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createInvoiceLineItemHandler = createInvoiceLineItemHandler;
function findInvoiceLineItemByIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const invoiceLineItem = yield (0, invoiceLineItemService_1.findInvoiceLineItemById)(id);
            res.status(200).json(invoiceLineItem);
        }
        catch (error) {
            console.error('error finding invoice line item', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.findInvoiceLineItemByIdHandler = findInvoiceLineItemByIdHandler;
function findInvoiceLineItemsByInvoiceIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoiceId = req.params.invoiceId;
            const invoiceLineItems = yield (0, invoiceLineItemService_1.findInvoiceLineItemsByInvoiceId)(invoiceId);
            res.status(200).json(invoiceLineItems);
        }
        catch (error) {
            console.error('error finding invoice line items', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.findInvoiceLineItemsByInvoiceIdHandler = findInvoiceLineItemsByInvoiceIdHandler;
function updateInvoiceLineItemHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const invoiceLineItem = yield (0, invoiceLineItemService_1.updateInvoiceLineItem)(id, updateData);
            res.status(200).json({ message: 'invoice line item updated successfully', invoiceLineItem });
        }
        catch (error) {
            console.error('error updating invoice line item', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updateInvoiceLineItemHandler = updateInvoiceLineItemHandler;
function deleteInvoiceLineItemHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, invoiceLineItemService_1.deleteInvoiceLineItem)(id);
            res.status(200).json({ message: 'invoice line item deleted successfully', result });
        }
        catch (error) {
            console.error('error deleting invoice line item', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deleteInvoiceLineItemHandler = deleteInvoiceLineItemHandler;
//# sourceMappingURL=invoiceLineItemController.js.map
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
exports.generateInvoicesHandler = exports.deleteInvoiceHandler = exports.updateInvoiceHandler = exports.findInvoicesByCustomerIdHandler = exports.findInvoiceByIdHandler = exports.createInvoiceHandler = void 0;
const invoiceService_1 = require("../services/invoiceService");
function createInvoiceHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoiceData = req.body;
            const invoice = yield (0, invoiceService_1.createInvoice)(invoiceData);
            res.status(201).json(invoice);
        }
        catch (error) {
            console.error('error while creating invoice', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createInvoiceHandler = createInvoiceHandler;
function findInvoiceByIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const invoice = yield (0, invoiceService_1.findInvoiceById)(id);
            res.status(200).json(invoice);
        }
        catch (error) {
            console.error('error finding invoice', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.findInvoiceByIdHandler = findInvoiceByIdHandler;
function findInvoicesByCustomerIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const customerId = req.params.customerId;
            const invoices = yield (0, invoiceService_1.findInvoicesByCustomerId)(customerId);
            res.status(200).json(invoices);
        }
        catch (error) {
            console.error('error while finding invoices', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.findInvoicesByCustomerIdHandler = findInvoicesByCustomerIdHandler;
function updateInvoiceHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const invoice = yield (0, invoiceService_1.updateInvoice)(id, updateData);
            res.status(200).json({ message: 'invoice updated successfully', invoice });
        }
        catch (error) {
            console.error('error updating invoice', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updateInvoiceHandler = updateInvoiceHandler;
function deleteInvoiceHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, invoiceService_1.deleteInvoice)(id);
            res.status(200).json({ message: 'invoice deleted successfully', result });
        }
        catch (error) {
            console.error('error deleting invoice', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deleteInvoiceHandler = deleteInvoiceHandler;
function generateInvoicesHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoices = yield (0, invoiceService_1.generateInvoices)();
            res.status(201).json(invoices);
        }
        catch (error) {
            console.error('error generating invoices:', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.generateInvoicesHandler = generateInvoicesHandler;
//# sourceMappingURL=invoiceController.js.map
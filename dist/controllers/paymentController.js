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
exports.makePaymentForInvoiceHandler = exports.deletePaymentHandler = exports.updatePaymentHandler = exports.findPaymentsByInvoiceIdHandler = exports.findPaymentByIdHandler = exports.createPaymentHandler = void 0;
const paymentService_1 = require("../services/paymentService");
function createPaymentHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const paymentData = req.body;
            const payment = yield (0, paymentService_1.createPayment)(paymentData);
            res.status(201).json(payment);
        }
        catch (error) {
            console.error('error creating payment:', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createPaymentHandler = createPaymentHandler;
function findPaymentByIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const payment = yield (0, paymentService_1.findPaymentById)(id);
            res.status(200).json(payment);
        }
        catch (error) {
            console.error('error finding payment', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.findPaymentByIdHandler = findPaymentByIdHandler;
function findPaymentsByInvoiceIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoiceId = req.params.invoiceId;
            const payments = yield (0, paymentService_1.findPaymentsByInvoiceId)(invoiceId);
            res.status(200).json(payments);
        }
        catch (error) {
            console.error('error while finding payments', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.findPaymentsByInvoiceIdHandler = findPaymentsByInvoiceIdHandler;
function updatePaymentHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const payment = yield (0, paymentService_1.updatePayment)(id, updateData);
            res.status(200).json({ message: 'payment updated successfully', payment });
        }
        catch (error) {
            console.error('error updating payment:', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updatePaymentHandler = updatePaymentHandler;
function deletePaymentHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, paymentService_1.deletePayment)(id);
            res.status(200).json({ message: 'payment deleted successfully', result });
        }
        catch (error) {
            console.error('error deleting payment:', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deletePaymentHandler = deletePaymentHandler;
function makePaymentForInvoiceHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const paymentData = req.body;
            const requiredFields = ['PaymentDate', 'ForExAmount', 'Currency', 'IndianAmount', 'InvoiceId', 'isFullPayment', 'BankPayment', 'Details'];
            for (const field of requiredFields) {
                if (!paymentData[field]) {
                    return res.status(400).json({ error: `${field} is required` });
                }
            }
            const payment = yield (0, paymentService_1.makePaymentForInvoice)(paymentData);
            res.status(201).json(payment);
        }
        catch (error) {
            console.error('error while making payment for invoice', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.makePaymentForInvoiceHandler = makePaymentForInvoiceHandler;
//# sourceMappingURL=paymentController.js.map
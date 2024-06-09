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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePaymentForInvoice = exports.deletePayment = exports.updatePayment = exports.findPaymentsByInvoiceId = exports.findPaymentById = exports.createPayment = void 0;
const paymentModel_1 = require("../models/paymentModel");
const sowManagementModel_1 = require("../models/sowManagementModel");
const invoiceModel_1 = require("../models/invoiceModel");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
function createPayment(paymentData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payment = yield paymentModel_1.Payment.create(paymentData);
            return payment;
        }
        catch (error) {
            console.error('error creating payment details', error);
            throw error;
        }
    });
}
exports.createPayment = createPayment;
function findPaymentById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payment = yield paymentModel_1.Payment.findByPk(id);
            return payment;
        }
        catch (error) {
            console.error('error finding payment details', error);
            throw error;
        }
    });
}
exports.findPaymentById = findPaymentById;
function findPaymentsByInvoiceId(invoiceId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payments = yield paymentModel_1.Payment.findAll({ where: { InvoiceId: invoiceId } });
            return payments;
        }
        catch (error) {
            console.error('error finding payments details', error);
            throw error;
        }
    });
}
exports.findPaymentsByInvoiceId = findPaymentsByInvoiceId;
function updatePayment(id, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payment = yield paymentModel_1.Payment.update(updateData, { where: { id } });
            return payment;
        }
        catch (error) {
            console.error('error while updating payment details', error);
            throw error;
        }
    });
}
exports.updatePayment = updatePayment;
function deletePayment(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield paymentModel_1.Payment.destroy({ where: { id } });
            return result;
        }
        catch (error) {
            console.error('error while deleting payment details', error);
            throw error;
        }
    });
}
exports.deletePayment = deletePayment;
function makePaymentForInvoice(paymentData) {
    return __awaiter(this, void 0, void 0, function* () {
        const transaction = yield pgConfig_1.default.transaction();
        try {
            const payment = yield paymentModel_1.Payment.create(paymentData, { transaction });
            const invoice = yield invoiceModel_1.Invoice.findByPk(paymentData.InvoiceId, { transaction });
            if (!invoice) {
                throw new Error('invoice not found');
            }
            const sow = yield sowManagementModel_1.SOW.findByPk(invoice.sowId, { transaction });
            if (!sow) {
                throw new Error('sow not found');
            }
            yield transaction.commit();
            return payment;
        }
        catch (error) {
            yield transaction.rollback();
            console.error('error making payment for invoice', error);
            throw error;
        }
    });
}
exports.makePaymentForInvoice = makePaymentForInvoice;
//# sourceMappingURL=paymentService.js.map
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
exports.generateInvoices = exports.deleteInvoice = exports.updateInvoice = exports.findInvoicesByCustomerId = exports.findInvoiceById = exports.createInvoice = void 0;
const invoiceModel_1 = require("../models/invoiceModel");
const sowManagementModel_1 = require("../models/sowManagementModel");
const sowPayPlan_1 = require("../models/sowPayPlan");
const sequelize_1 = require("sequelize");
function createInvoice(invoiceData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoice = yield invoiceModel_1.Invoice.create(invoiceData);
            return invoice;
        }
        catch (error) {
            console.error('error creating invoice', error);
            throw error;
        }
    });
}
exports.createInvoice = createInvoice;
function findInvoiceById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoice = yield invoiceModel_1.Invoice.findByPk(id);
            return invoice;
        }
        catch (error) {
            console.error('error finding invoice', error);
            throw error;
        }
    });
}
exports.findInvoiceById = findInvoiceById;
function findInvoicesByCustomerId(customerId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoices = yield invoiceModel_1.Invoice.findAll({ where: { customerId } });
            return invoices;
        }
        catch (error) {
            console.error('error finding invoices', error);
            throw error;
        }
    });
}
exports.findInvoicesByCustomerId = findInvoicesByCustomerId;
function updateInvoice(id, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoice = yield invoiceModel_1.Invoice.update(updateData, { where: { id } });
            return invoice;
        }
        catch (error) {
            console.error('error updating invoice', error);
            throw error;
        }
    });
}
exports.updateInvoice = updateInvoice;
function deleteInvoice(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield invoiceModel_1.Invoice.destroy({ where: { id } });
            return result;
        }
        catch (error) {
            console.error('error while deleting invoice', error);
            throw error;
        }
    });
}
exports.deleteInvoice = deleteInvoice;
function generateInvoices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const today = new Date();
            const paymentPlans = yield sowPayPlan_1.SOWPaymentPlan.findAll({
                where: {
                    plannedInvoiceDate: {
                        [sequelize_1.Op.eq]: today,
                    },
                },
                include: [sowManagementModel_1.SOW],
            });
            const invoices = paymentPlans.map((plan) => ({
                id: `INV_${plan.id}`,
                totalInvoiceValue: plan.totalActualAmount,
                sowId: plan.sowId,
                status: 'Drafted',
                sowPaymentPlanId: plan.id,
                invoiceSentOn: null,
                customerId: plan.customerId,
                paymentReceivedOn: null,
                invoiceVersionNo: 1,
                paymentId: null,
                invoiceAmount: plan.totalActualAmount,
                invoiceTaxAmount: 0,
            }));
            const createdInvoices = yield invoiceModel_1.Invoice.bulkCreate(invoices);
            return createdInvoices;
        }
        catch (error) {
            console.error('error generating invoices', error);
            throw error;
        }
    });
}
exports.generateInvoices = generateInvoices;
//# sourceMappingURL=invoiceService.js.map
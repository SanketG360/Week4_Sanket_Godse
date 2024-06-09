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
exports.getClientPaymentPlansHandler = exports.deletePaymentPlanHandler = exports.updatePaymentPlanHandler = exports.findPaymentPlanBySOWIdHandler = exports.createPaymentPlanHandler = void 0;
const sowPayPlanService_1 = require("../services/sowPayPlanService");
function createPaymentPlanHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const paymentPlanData = req.body;
            const paymentPlan = yield (0, sowPayPlanService_1.createPaymentPlan)(paymentPlanData);
            res.status(201).json(paymentPlan);
        }
        catch (error) {
            console.error('error while creating payment plan', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createPaymentPlanHandler = createPaymentPlanHandler;
function findPaymentPlanBySOWIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowId = req.params.sowId;
            const paymentPlans = yield (0, sowPayPlanService_1.findPaymentPlanBySOWId)(sowId);
            res.status(200).json(paymentPlans);
        }
        catch (error) {
            console.error('error while finding payment', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.findPaymentPlanBySOWIdHandler = findPaymentPlanBySOWIdHandler;
function updatePaymentPlanHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowId = req.params.sowId;
            const updateData = req.body;
            const paymentPlans = yield (0, sowPayPlanService_1.updatePaymentPlan)(sowId, updateData);
            res.status(200).json({ message: 'payment plans updated successfully', paymentPlans });
        }
        catch (error) {
            console.error('error while updating payment plan', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updatePaymentPlanHandler = updatePaymentPlanHandler;
function deletePaymentPlanHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sowId = req.params.sowId;
            const result = yield (0, sowPayPlanService_1.deletePaymentPlan)(sowId);
            res.status(200).json(result);
        }
        catch (error) {
            console.error('error while deleting payment plan', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deletePaymentPlanHandler = deletePaymentPlanHandler;
function getClientPaymentPlansHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const customerId = req.params.customerId;
            const paymentPlans = yield (0, sowPayPlanService_1.getClientPaymentPlans)(customerId);
            res.status(200).json(paymentPlans);
        }
        catch (error) {
            console.error('error getting client payment plans', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getClientPaymentPlansHandler = getClientPaymentPlansHandler;
//# sourceMappingURL=sowPayPlanController.js.map
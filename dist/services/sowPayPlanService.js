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
exports.getClientPaymentPlans = exports.deletePaymentPlan = exports.updatePaymentPlan = exports.findPaymentPlanBySOWId = exports.createPaymentPlan = void 0;
const sowPayPlan_1 = require("../models/sowPayPlan");
function createPaymentPlan(paymentPlanData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const paymentPlan = yield sowPayPlan_1.SOWPaymentPlan.create(paymentPlanData);
            return paymentPlan;
        }
        catch (error) {
            console.error('error while creating payment plan!!', error);
            throw error;
        }
    });
}
exports.createPaymentPlan = createPaymentPlan;
function findPaymentPlanBySOWId(sowId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const paymentPlans = yield sowPayPlan_1.SOWPaymentPlan.findAll({ where: { sowId } });
            return paymentPlans;
        }
        catch (error) {
            console.error('error while finding payment plan', error);
            throw error;
        }
    });
}
exports.findPaymentPlanBySOWId = findPaymentPlanBySOWId;
function updatePaymentPlan(sowId, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const paymentPlans = yield findPaymentPlanBySOWId(sowId);
            if (!paymentPlans)
                throw new Error('payment plans not found');
            yield sowPayPlan_1.SOWPaymentPlan.update(updateData, { where: { sowId } });
            return yield findPaymentPlanBySOWId(sowId);
        }
        catch (error) {
            console.error('error while updating payment plan', error);
            throw error;
        }
    });
}
exports.updatePaymentPlan = updatePaymentPlan;
function deletePaymentPlan(sowId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const paymentPlans = yield findPaymentPlanBySOWId(sowId);
            if (!paymentPlans)
                throw new Error('payment plans not found');
            yield sowPayPlan_1.SOWPaymentPlan.destroy({ where: { sowId } });
            return { message: 'payment plans deleted successfully' };
        }
        catch (error) {
            console.error('Error deleting payment plan:', error);
            throw error;
        }
    });
}
exports.deletePaymentPlan = deletePaymentPlan;
function getClientPaymentPlans(customerId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const paymentPlans = yield sowPayPlan_1.SOWPaymentPlan.findAll({ where: { customerId } });
            return paymentPlans;
        }
        catch (error) {
            console.error('error while fetching client payment plans:', error);
            throw error;
        }
    });
}
exports.getClientPaymentPlans = getClientPaymentPlans;
//# sourceMappingURL=sowPayPlanService.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sowPaymentPlanRoutes = void 0;
const express_1 = __importDefault(require("express"));
const sowPayPlanController_1 = require("../controllers/sowPayPlanController");
const router = express_1.default.Router();
exports.sowPaymentPlanRoutes = router;
router.post('/paymentplans', sowPayPlanController_1.createPaymentPlanHandler);
router.get('/payplans/:sowId', sowPayPlanController_1.findPaymentPlanBySOWIdHandler);
router.put('/payplans/:sowId', sowPayPlanController_1.updatePaymentPlanHandler);
router.delete('/payplans/:sowId', sowPayPlanController_1.deletePaymentPlanHandler);
router.get('/customer/payplans/:customerId', sowPayPlanController_1.getClientPaymentPlansHandler);
//# sourceMappingURL=sowPaymentPlanRoutes.js.map
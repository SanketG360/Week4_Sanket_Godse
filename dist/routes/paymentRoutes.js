"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const paymentController_1 = require("../controllers/paymentController");
const router = express_1.default.Router();
exports.paymentRoutes = router;
router.post('/payment', paymentController_1.createPaymentHandler);
router.get('/payment/:id', paymentController_1.findPaymentByIdHandler);
router.get('/payment/:invoiceId', paymentController_1.findPaymentsByInvoiceIdHandler);
router.put('/payment/:id', paymentController_1.updatePaymentHandler);
router.delete('/payment/:id', paymentController_1.deletePaymentHandler);
router.post('/make-payment', paymentController_1.makePaymentForInvoiceHandler);
//# sourceMappingURL=paymentRoutes.js.map
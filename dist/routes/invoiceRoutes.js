"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const invoiceController_1 = require("../controllers/invoiceController");
const router = express_1.default.Router();
exports.invoiceRoutes = router;
router.post('/invoice', invoiceController_1.createInvoiceHandler);
router.get('/invoice/:id', invoiceController_1.findInvoiceByIdHandler);
router.get('/invoice/customer/:customerId', invoiceController_1.findInvoicesByCustomerIdHandler);
router.put('/invoice/:id', invoiceController_1.updateInvoiceHandler);
router.delete('/invoice/:id', invoiceController_1.deleteInvoiceHandler);
router.post('/invoice/generate', invoiceController_1.generateInvoicesHandler);
//# sourceMappingURL=invoiceRoutes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceLineItemRoutes = void 0;
const express_1 = __importDefault(require("express"));
const invoiceLineItemController_1 = require("../controllers/invoiceLineItemController");
const router = express_1.default.Router();
exports.invoiceLineItemRoutes = router;
router.post('/invoice/lineItem', invoiceLineItemController_1.createInvoiceLineItemHandler);
router.get('/invoice/lineItem/:id', invoiceLineItemController_1.findInvoiceLineItemByIdHandler);
router.get('/invoice/lineItem/:invoiceId', invoiceLineItemController_1.findInvoiceLineItemsByInvoiceIdHandler);
router.put('/invoice/lineItem/:id', invoiceLineItemController_1.updateInvoiceLineItemHandler);
router.delete('/invoice/lineItem/:id', invoiceLineItemController_1.deleteInvoiceLineItemHandler);
//# sourceMappingURL=invoiceLineItemRoutes.js.map
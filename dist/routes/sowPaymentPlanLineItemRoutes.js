"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sowPaymentPlanLineItemRoutes = void 0;
const express_1 = __importDefault(require("express"));
const sowPayPlanItemController_1 = require("../controllers/sowPayPlanItemController");
const router = express_1.default.Router();
exports.sowPaymentPlanLineItemRoutes = router;
router.post('/sow/items', sowPayPlanItemController_1.createSowPaymentPlanItemHandler);
router.get('/sow/items/:sowId', sowPayPlanItemController_1.findSowPaymentPlanItemsBySOWIdHandler);
router.get('/sow/items/:orderId', sowPayPlanItemController_1.findSowPaymentPlanItemsByOrderIdHandler);
router.put('/sow/items/update/:id', sowPayPlanItemController_1.updateSowPaymentPlanItemHandler);
router.delete('/sow/items/delete/:id', sowPayPlanItemController_1.deleteSowPaymentPlanItemHandler);
//# sourceMappingURL=sowPaymentPlanLineItemRoutes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const organizationRoutes_1 = require("./routes/organizationRoutes");
const customerRoutes_1 = require("./routes/customerRoutes");
const sowRoutes_1 = require("./routes/sowRoutes");
const sowPaymentPlanRoutes_1 = require("./routes/sowPaymentPlanRoutes");
const sowPaymentPlanLineItemRoutes_1 = require("./routes/sowPaymentPlanLineItemRoutes");
const invoiceRoutes_1 = require("./routes/invoiceRoutes");
const invoiceLineItemRoutes_1 = require("./routes/invoiceLineItemRoutes");
const paymentRoutes_1 = require("./routes/paymentRoutes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    console.log("Hello i'm  sanket godse");
});
app.use('/api/organizations', organizationRoutes_1.organizationRoutes);
app.use('/api/customers', customerRoutes_1.customerRoutes);
app.use('/api/sows', sowRoutes_1.sowRoutes);
app.use('/api/sowPaymentPlans', sowPaymentPlanRoutes_1.sowPaymentPlanRoutes);
app.use('/api/sowPaymentPlanLineItems', sowPaymentPlanLineItemRoutes_1.sowPaymentPlanLineItemRoutes);
app.use('/api/invoices', invoiceRoutes_1.invoiceRoutes);
app.use('/api/invoiceLineItems', invoiceLineItemRoutes_1.invoiceLineItemRoutes);
app.use('/api/payments', paymentRoutes_1.paymentRoutes);
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
//# sourceMappingURL=app.js.map
import express ,{Request , Response} from 'express';
import  dotenv from 'dotenv';
import  {organizationRoutes} from './routes/organizationRoutes';
import {customerRoutes} from './routes/customerRoutes';
import {sowRoutes} from './routes/sowRoutes';
import {sowPaymentPlanRoutes} from './routes/sowPaymentPlanRoutes';
import {sowPaymentPlanLineItemRoutes} from './routes/sowPaymentPlanLineItemRoutes';
import {invoiceRoutes} from './routes/invoiceRoutes';
import {invoiceLineItemRoutes }from './routes/invoiceLineItemRoutes';
import {paymentRoutes }from './routes/paymentRoutes';
dotenv.config();

const app =  express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.get('/',(req,res)=>{
    console.log("Hello i'm  sanket godse");
});

app.use('/api/organizations', organizationRoutes);
app.use('/api/client', customerRoutes);
app.use('/api/sows', sowRoutes);
app.use('/api/sowPaymentPlans', sowPaymentPlanRoutes);
app.use('/api/sowPaymentPlanLineItems', sowPaymentPlanLineItemRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/invoiceLineItems', invoiceLineItemRoutes);
app.use('/api/payments', paymentRoutes);

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})


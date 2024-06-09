import express from 'express';
import {createPaymentHandler,findPaymentByIdHandler,findPaymentsByInvoiceIdHandler,updatePaymentHandler,deletePaymentHandler,makePaymentForInvoiceHandler} from '../controllers/paymentController';

const router = express.Router();

router.post('/payment', createPaymentHandler);
router.get('/payment/:id', findPaymentByIdHandler);
router.get('/payment/:invoiceId', findPaymentsByInvoiceIdHandler);
router.put('/payment/:id', updatePaymentHandler);
router.delete('/payment/:id', deletePaymentHandler);
router.post('/make-payment', makePaymentForInvoiceHandler);


export { router as paymentRoutes };



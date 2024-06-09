import express from 'express';
import {createInvoiceHandler,findInvoiceByIdHandler,findInvoicesByCustomerIdHandler,updateInvoiceHandler,deleteInvoiceHandler,generateInvoicesHandler} from '../controllers/invoiceController';

const router = express.Router();

router.post('/invoice', createInvoiceHandler);
router.get('/invoice/:id', findInvoiceByIdHandler);
router.get('/invoice/customer/:customerId', findInvoicesByCustomerIdHandler);
router.put('/invoice/:id', updateInvoiceHandler);
router.delete('/invoice/:id', deleteInvoiceHandler);
router.post('/invoice/generate', generateInvoicesHandler);


export { router as invoiceRoutes };




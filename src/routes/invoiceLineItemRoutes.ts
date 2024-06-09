import express from 'express';
import {createInvoiceLineItemHandler,findInvoiceLineItemByIdHandler,findInvoiceLineItemsByInvoiceIdHandler,updateInvoiceLineItemHandler,deleteInvoiceLineItemHandler} from '../controllers/invoiceLineItemController';

const router = express.Router();

router.post('/invoice/lineItem', createInvoiceLineItemHandler);
router.get('/invoice/lineItem/:id', findInvoiceLineItemByIdHandler);
router.get('/invoice/lineItem/:invoiceId', findInvoiceLineItemsByInvoiceIdHandler);
router.put('/invoice/lineItem/:id', updateInvoiceLineItemHandler);
router.delete('/invoice/lineItem/:id', deleteInvoiceLineItemHandler);

export { router as invoiceLineItemRoutes  };

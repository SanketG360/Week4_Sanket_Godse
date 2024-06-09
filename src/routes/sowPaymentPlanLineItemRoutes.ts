import express from 'express';
import {createSowPaymentPlanItemHandler,findSowPaymentPlanItemsBySOWIdHandler,findSowPaymentPlanItemsByOrderIdHandler,updateSowPaymentPlanItemHandler,deleteSowPaymentPlanItemHandler} from '../controllers/sowPayPlanItemController';

const router = express.Router();

router.post('/sow/items', createSowPaymentPlanItemHandler);
router.get('/sow/items/:sowId', findSowPaymentPlanItemsBySOWIdHandler);
router.get('/sow/items/:orderId', findSowPaymentPlanItemsByOrderIdHandler);
router.put('/sow/items/update/:id', updateSowPaymentPlanItemHandler);
router.delete('/sow/items/delete/:id', deleteSowPaymentPlanItemHandler);


export { router as sowPaymentPlanLineItemRoutes};



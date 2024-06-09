import express from 'express';
import {createPaymentPlanHandler,findPaymentPlanBySOWIdHandler,updatePaymentPlanHandler,deletePaymentPlanHandler,getClientPaymentPlansHandler} from '../controllers/sowPayPlanController';

const router = express.Router();

router.post('/paymentplans', createPaymentPlanHandler);
router.get('/payplans/:sowId', findPaymentPlanBySOWIdHandler);
router.put('/payplans/:sowId', updatePaymentPlanHandler);
router.delete('/payplans/:sowId', deletePaymentPlanHandler);

router.get('/customer/payplans/:customerId', getClientPaymentPlansHandler);


export { router as sowPaymentPlanRoutes};

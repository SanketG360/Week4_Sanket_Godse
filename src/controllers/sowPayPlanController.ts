import {createPaymentPlan,findPaymentPlanBySOWId,updatePaymentPlan,deletePaymentPlan,getClientPaymentPlans,} from '../services/sowPayPlanService';
import { Request, Response } from 'express';
  
async function createPaymentPlanHandler(req: Request, res: Response) {
  try {
    const paymentPlanData = req.body;
    const paymentPlan = await createPaymentPlan(paymentPlanData);
    res.status(201).json(paymentPlan);
  } catch (error) {
    console.error('error while creating payment plan', error);
    res.status(500).json({error: 'internal server error' });
  }
}
  
async function findPaymentPlanBySOWIdHandler(req: Request, res: Response) {
  try {
    const sowId = req.params.sowId;
    const paymentPlans = await findPaymentPlanBySOWId(sowId);
    res.status(200).json(paymentPlans);
  }catch(error) {
    console.error('error while finding payment', error);
    res.status(500).json({error:'internal server error' });
  }
}
  
async function updatePaymentPlanHandler(req: Request, res: Response) {
  try {
    const sowId = req.params.sowId;
    const updateData = req.body;
    const paymentPlans = await updatePaymentPlan(sowId, updateData);
    res.status(200).json({ message: 'payment plans updated successfully', paymentPlans });
  } catch (error) {
    console.error('error while updating payment plan', error);
    res.status(500).json({ error: 'internal server error' });
  }
}
  
async function deletePaymentPlanHandler(req: Request, res: Response) {
  try {
    const sowId = req.params.sowId;
    const result = await deletePaymentPlan(sowId);
    res.status(200).json(result);
  } catch (error) {
    console.error('error while deleting payment plan', error);
    res.status(500).json({ error: 'internal server error' });
  }
}
  
async function getClientPaymentPlansHandler(req: Request, res: Response) {
  try {
    const customerId = req.params.customerId;
    const paymentPlans = await getClientPaymentPlans(customerId);
    res.status(200).json(paymentPlans);
  } catch (error) {
    console.error('error getting client payment plans', error);
    res.status(500).json({ error: 'internal server error' });
  }
}
  
export {createPaymentPlanHandler,findPaymentPlanBySOWIdHandler,updatePaymentPlanHandler,deletePaymentPlanHandler,getClientPaymentPlansHandler};



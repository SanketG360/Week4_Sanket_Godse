import { Request, Response } from 'express';
import {createSowPaymentPlanItem,findSowPaymentPlanItemsBySOWId,findSowPaymentPlanItemsByOrderId,updateSowPaymentPlanItem,deleteSowPaymentPlanItem} from '../services/sowPayPlanItemService';

async function createSowPaymentPlanItemHandler(req:Request, res:Response) {
  try{
    const sowPaymentPlanItemData = req.body;
    const sowPaymentPlanItem = await createSowPaymentPlanItem(sowPaymentPlanItemData);
    res.status(201).json(sowPaymentPlanItem);
  }catch(error){
    console.error('error while creating sow payment plan item:',error);
    res.status(500).json({error:'internal server error'});
  }
}

async function findSowPaymentPlanItemsBySOWIdHandler(req:Request, res:Response) {
  try {
    const sowId = req.params.sowId;
    const sowPaymentPlanItems = await findSowPaymentPlanItemsBySOWId(sowId);
    res.status(200).json(sowPaymentPlanItems);
  }catch(error) {
    console.error('error finding sow payment plan items',error);
    res.status(500).json({error:'internal server error'});
  }
}

async function findSowPaymentPlanItemsByOrderIdHandler(req:Request, res:Response) {
  try {
    const orderId = req.params.orderId;
    const sowPaymentPlanItems = await findSowPaymentPlanItemsByOrderId(orderId);
    res.status(200).json(sowPaymentPlanItems);
  }catch(error){
    console.error('error while finding sow payment plan items',error);
    res.status(500).json({error:'internal server error'});
  }
}

async function updateSowPaymentPlanItemHandler(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const sowPaymentPlanItem = await updateSowPaymentPlanItem(id,updateData);
    res.status(200).json({ message: 'sow payment plan item updated successfully',sowPaymentPlanItem});
  } catch (error) {
    console.error('Error updating SOW payment plan item:',error);
    res.status(500).json({error:'internal server error'});
  }
}

async function deleteSowPaymentPlanItemHandler(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const result = await deleteSowPaymentPlanItem(id);
    res.status(200).json({ message: 'sow payment plan item deleted successfully', result });
  } catch(error){
    console.error('error deleting sow payment plan item',error);
    res.status(500).json({error: 'internal server error'});
  }
}


export {createSowPaymentPlanItemHandler,findSowPaymentPlanItemsBySOWIdHandler,findSowPaymentPlanItemsByOrderIdHandler,updateSowPaymentPlanItemHandler,deleteSowPaymentPlanItemHandler};

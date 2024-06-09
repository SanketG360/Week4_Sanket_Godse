import { SowPaymentPlanItem } from '../models/sowPayPlanLineItem';

async function createSowPaymentPlanItem(sowPaymentPlanItemData:any) {
  try {
    const sowPaymentPlanItem = await SowPaymentPlanItem.create(sowPaymentPlanItemData);
    return sowPaymentPlanItem;
  }catch (error) {
    console.error('error while creating sow payment plan item',error);
    throw error;
  }
}

async function findSowPaymentPlanItemsBySOWId(sowId:string) {
  try{
    const sowPaymentPlanItems = await SowPaymentPlanItem.findAll({where:{sowId}});
    return sowPaymentPlanItems;
  } catch(error) {
    console.error('error while finding sow payment plan items',error);
    throw error;
  }
}

async function findSowPaymentPlanItemsByOrderId(orderId:string) {
  try {
    const sowPaymentPlanItems = await SowPaymentPlanItem.findAll({where:{orderId}});
    return sowPaymentPlanItems;
  } catch (error) {
    console.error('error while finding sow payment plan items',error);
    throw error;
  }
}

async function updateSowPaymentPlanItem(id:string, updateData:any) {
  try {
    const sowPaymentPlanItem = await SowPaymentPlanItem.update(updateData, {where:{id}});
    return sowPaymentPlanItem;
  }catch(error) {
    console.error('error while updating sow payment plan item',error);
    throw error;
  }
}

async function deleteSowPaymentPlanItem(id:string){
  try {
    const result = await SowPaymentPlanItem.destroy({where:{id}});
    return result;
  } catch (error) {
    console.error('error while deleting sow payment plan item',error);
    throw error;
  }
}

export {createSowPaymentPlanItem,findSowPaymentPlanItemsBySOWId,findSowPaymentPlanItemsByOrderId,updateSowPaymentPlanItem,deleteSowPaymentPlanItem};

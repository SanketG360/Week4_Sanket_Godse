import { InvoiceLineItem } from '../models/invoiceLineItem';

async function createInvoiceLineItem(invoiceLineItemData:any) {
  try {
    
    const invoiceLineItem = await InvoiceLineItem.create(invoiceLineItemData);
    return invoiceLineItem;
  
  } catch(error) {
    
    console.error('error while creating invoice line item',error);
    throw error;

  }
}

async function findInvoiceLineItemById(id:string) {
  try {
    const invoiceLineItem = await InvoiceLineItem.findByPk(id);
    return invoiceLineItem;
  } catch (error) {
    console.error('error while finding invoice line item',error);
    throw error;
  }
}

async function findInvoiceLineItemsByInvoiceId(invoiceId:string) {
  try {
    const invoiceLineItems = await InvoiceLineItem.findAll({ where:{invoiceId} });
    return invoiceLineItems;
  } catch (error){
    console.error('error finding invoice line items',error);
    throw error;
  }
}

async function updateInvoiceLineItem(id:string, updateData:any) {
  try {
    const invoiceLineItem = await InvoiceLineItem.update(updateData,{ where:{id} });
    return invoiceLineItem;
  } catch (error) {
    console.error('error while updating invoice line item',error);
    throw error;
  }
}

async function deleteInvoiceLineItem(id:string) {
  try {
    const result = await InvoiceLineItem.destroy({ where:{id} });
    return result;
  } catch (error) {
    console.error('error deleting invoice line item',error);
    throw error;
  }
}

export {createInvoiceLineItem,findInvoiceLineItemById,findInvoiceLineItemsByInvoiceId,updateInvoiceLineItem,deleteInvoiceLineItem};

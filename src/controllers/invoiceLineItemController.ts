import { Request, Response } from 'express';
import {createInvoiceLineItem,findInvoiceLineItemById,findInvoiceLineItemsByInvoiceId,updateInvoiceLineItem,deleteInvoiceLineItem} from '../services/invoiceLineItemService';

async function createInvoiceLineItemHandler(req:Request, res:Response) {
  try {
    const invoiceLineItemData = req.body;
    const invoiceLineItem = await createInvoiceLineItem(invoiceLineItemData);
    res.status(201).json(invoiceLineItem);
  
  }catch(error) {
    console.error('error while creating invoice line item',error);
    res.status(500).json({error: 'internal server error'});
  }
}

async function findInvoiceLineItemByIdHandler(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const invoiceLineItem = await findInvoiceLineItemById(id);
    res.status(200).json(invoiceLineItem);
  
  } catch (error) {
    console.error('error finding invoice line item',error);
    res.status(500).json({error:'internal server error'});
  }
}

async function findInvoiceLineItemsByInvoiceIdHandler(req:Request, res:Response) {
  try {
    const invoiceId = req.params.invoiceId;
    const invoiceLineItems = await findInvoiceLineItemsByInvoiceId(invoiceId);
    res.status(200).json(invoiceLineItems);
  
  } catch (error) {
    console.error('error finding invoice line items',error);
    res.status(500).json({error:'internal server error'});
  }
}

async function updateInvoiceLineItemHandler(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const invoiceLineItem = await updateInvoiceLineItem(id, updateData);
    res.status(200).json({ message:'invoice line item updated successfully', invoiceLineItem});
  
  } catch (error) {
    console.error('error updating invoice line item', error);
    res.status(500).json({error: 'internal server error'});
  }
}

async function deleteInvoiceLineItemHandler(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const result = await deleteInvoiceLineItem(id);
    res.status(200).json({message:'invoice line item deleted successfully',result});
  
  } catch (error) {
    console.error('error deleting invoice line item', error);
    res.status(500).json({error:'internal server error'});
  }
}

export {createInvoiceLineItemHandler,findInvoiceLineItemByIdHandler,findInvoiceLineItemsByInvoiceIdHandler,updateInvoiceLineItemHandler,deleteInvoiceLineItemHandler};

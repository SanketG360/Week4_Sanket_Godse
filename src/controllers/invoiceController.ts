import { Request, Response } from 'express';
import {createInvoice,findInvoiceById,findInvoicesByCustomerId,updateInvoice,deleteInvoice,generateInvoices} from '../services/invoiceService';

async function createInvoiceHandler(req:Request, res:Response) {
  try {
    const invoiceData = req.body;
    const invoice = await createInvoice(invoiceData);
    res.status(201).json(invoice);
  } catch(error) {
    console.error('error while creating invoice', error);
    res.status(500).json({error: 'internal server error'});
  }
}

async function findInvoiceByIdHandler(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const invoice = await findInvoiceById(id);
    res.status(200).json(invoice);
  } catch (error) {
    console.error('error finding invoice', error);
    res.status(500).json({error: 'internal server error'});
  }
}

async function findInvoicesByCustomerIdHandler(req:Request, res:Response) {
  try {
    const customerId = req.params.customerId;
    const invoices = await findInvoicesByCustomerId(customerId);
    res.status(200).json(invoices);
  }catch(error) {
    console.error('error while finding invoices', error);
    res.status(500).json({error:'internal server error'});
  }
}

async function updateInvoiceHandler(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const invoice = await updateInvoice(id,updateData);
    res.status(200).json({message:'invoice updated successfully',invoice});
  }catch(error) {
    console.error('error updating invoice',error);
    res.status(500).json({error:'internal server error'});
  }
}

async function deleteInvoiceHandler(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const result = await deleteInvoice(id);
    res.status(200).json({message:'invoice deleted successfully',result});
  } catch(error) {
    console.error('error deleting invoice',error);
    res.status(500).json({error: 'internal server error'});
  }
}

async function generateInvoicesHandler(req:Request, res:Response) {
  try {
    const invoices = await generateInvoices();
    res.status(201).json(invoices);
  }catch(error) {
    console.error('error generating invoices:',error);
    res.status(500).json({error:'internal server error'});
  }
}

export {createInvoiceHandler,findInvoiceByIdHandler,findInvoicesByCustomerIdHandler,updateInvoiceHandler,deleteInvoiceHandler,generateInvoicesHandler};

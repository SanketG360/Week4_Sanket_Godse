import { Request, Response } from 'express';
import {createPayment,findPaymentById,findPaymentsByInvoiceId,updatePayment,deletePayment,makePaymentForInvoice} from '../services/paymentService';

async function createPaymentHandler(req: Request, res: Response) {
  try {
    const paymentData = req.body;
    const payment = await createPayment(paymentData);
    res.status(201).json(payment);
  }catch(error) {
    console.error('error creating payment:',error);
    res.status(500).json({error: 'internal server error'});
  }
}

async function findPaymentByIdHandler(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const payment = await findPaymentById(id);
    res.status(200).json(payment);
  } catch (error) {
    console.error('error finding payment',error);
    res.status(500).json({ error:'internal server error' });
  }
}

async function findPaymentsByInvoiceIdHandler(req:Request, res:Response) {
  try {
    const invoiceId = req.params.invoiceId;
    const payments = await findPaymentsByInvoiceId(invoiceId);
    res.status(200).json(payments);
  } catch (error) {
    console.error('error while finding payments', error);
    res.status(500).json({ error:'internal server error' });
  }
}

async function updatePaymentHandler(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const payment = await updatePayment(id, updateData);
    res.status(200).json({ message:'payment updated successfully',payment });
  } catch (error) {
    console.error('error updating payment:', error);
    res.status(500).json({ error:'internal server error'});
  }
}

async function deletePaymentHandler(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const result = await deletePayment(id);
    res.status(200).json({ message:'payment deleted successfully',result });
  } catch (error) {
    console.error('error deleting payment:',error);
    res.status(500).json({error:'internal server error'});
  }
}

async function makePaymentForInvoiceHandler(req: Request, res: Response) {
    try {
      const paymentData = req.body;
  
      const requiredFields = ['PaymentDate','ForExAmount','Currency','IndianAmount','InvoiceId','isFullPayment','BankPayment','Details'];
  
      for (const field of requiredFields) {
        if (!paymentData[field]) {
          return res.status(400).json({error:`${field} is required`});
        }
      }
  
      const payment = await makePaymentForInvoice(paymentData);
      res.status(201).json(payment);
    } catch (error) {

      console.error('error while making payment for invoice', error);
      res.status(500).json({error:'internal server error'});
    
    }
}
  

export {createPaymentHandler,findPaymentByIdHandler,findPaymentsByInvoiceIdHandler,updatePaymentHandler,deletePaymentHandler,makePaymentForInvoiceHandler};

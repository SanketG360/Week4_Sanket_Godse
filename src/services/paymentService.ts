import { Payment } from '../models/paymentModel';
import { SOW } from '../models/sowManagementModel';
import { Invoice } from '../models/invoiceModel';
import sequelize from '../postgresDB/pgConfig';


async function createPayment(paymentData:any) {
  try {
    const payment = await Payment.create(paymentData);
    return payment;
  } catch (error) {
    console.error('error creating payment details',error);
    throw error;
  }
}

async function findPaymentById(id: string) {
  try {
    const payment = await Payment.findByPk(id);
    return payment;
  } catch (error) {
    console.error('error finding payment details', error);
    throw error;
  }
}

async function findPaymentsByInvoiceId(invoiceId: string) {
  try {
    const payments = await Payment.findAll({where:{InvoiceId:invoiceId}});
    return payments;
  } catch (error) {
    console.error('error finding payments details',error);
    throw error;
  }
}

async function updatePayment(id: string, updateData: any) {
  try {
    const payment = await Payment.update(updateData, {where:{id}});
    return payment;
  } catch (error) {
    console.error('error while updating payment details', error);
    throw error;
  }
}

async function deletePayment(id: string) {
  try {
    const result = await Payment.destroy({ where:{id} });
    return result;
  } catch (error) {
    console.error('error while deleting payment details',error);
    throw error;
  }
}

async function makePaymentForInvoice(paymentData: any) {
    const transaction = await sequelize.transaction();
    try {
      const payment = await Payment.create(paymentData, {transaction});
  
      const invoice = await Invoice.findByPk(paymentData.InvoiceId, {transaction});
      if (!invoice) {
        throw new Error('invoice not found');
      }
  
      const sow = await SOW.findByPk(invoice.sowId, {transaction});
      if (!sow) {
        throw new Error('sow not found');
      }
      await transaction.commit();
      return payment;
    
    } catch (error) {

      await transaction.rollback();
      console.error('error making payment for invoice', error);
      throw error;
    }
}

export {createPayment,findPaymentById,findPaymentsByInvoiceId,updatePayment,deletePayment,makePaymentForInvoice};

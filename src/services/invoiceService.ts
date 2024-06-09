import { Invoice } from '../models/invoiceModel';
import { SOW } from '../models/sowManagementModel';
import { SOWPaymentPlan  } from '../models/sowPayPlan';
import { Op } from 'sequelize';

async function createInvoice(invoiceData:any) {
  try {
    const invoice = await Invoice.create(invoiceData);
    return invoice;
  } catch(error){
    console.error('error creating invoice',error);
    throw error;
  }
}

async function findInvoiceById(id:string) {
  try {
    const invoice = await Invoice.findByPk(id);
    return invoice;
  }catch(error){
    console.error('error finding invoice', error);
    throw error;
  }
}

async function findInvoicesByCustomerId(customerId:string) {
  try {
    const invoices = await Invoice.findAll({where:{customerId}});
    return invoices;
  } catch (error) {
    console.error('error finding invoices',error);
    throw error;
  }
}

async function updateInvoice(id:string, updateData:any) {
  try {
    const invoice = await Invoice.update(updateData,{where:{id}});
    return invoice;
  } catch (error) {
    console.error('error updating invoice',error);
    throw error;
  }
}

async function deleteInvoice(id: string) {
  try {
    const result = await Invoice.destroy({where:{id}});
    return result;
  } catch (error) {
    console.error('error while deleting invoice', error);
    throw error;
  }
}

async function generateInvoices() {
  try {
    const today = new Date();
    const paymentPlans = await SOWPaymentPlan.findAll({
      where: {
        plannedInvoiceDate: {
          [Op.eq]:today,
        },
      },
      include:[SOW],
    });

    const invoices = paymentPlans.map((plan) => ({
      id: `INV_${plan.id}`,
      totalInvoiceValue: plan.totalActualAmount,
      sowId: plan.sowId,
      status: 'Drafted',
      sowPaymentPlanId: plan.id,
      invoiceSentOn: null,
      customerId: plan.customerId,
      paymentReceivedOn: null,
      invoiceVersionNo: 1,
      paymentId: null,
      invoiceAmount: plan.totalActualAmount,
      invoiceTaxAmount: 0,
    }));

    const createdInvoices = await Invoice.bulkCreate(invoices);
    
    return createdInvoices;
  
  } catch(error) {

    console.error('error generating invoices',error);
    throw error;

  }
}

export {createInvoice,findInvoiceById,findInvoicesByCustomerId,updateInvoice,deleteInvoice,generateInvoices};

import { Request, Response } from 'express';
import { createCustomer } from '../services/customerService';

async function registerCustomer(req: Request, res: Response) {
  try {
    const customerData = req.body;
    const customer = await createCustomer(customerData);
    res.status(201).json({ message: 'Customer registered successfully', customer });
  }catch(error) {
    console.error('Error while registering customer!!', error);
    res.status(500).json({ error: 'Internal Server Error!!' });
  }
}

export { registerCustomer };

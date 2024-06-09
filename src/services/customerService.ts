import { Customer } from '../models/customerModel';

async function createCustomer(clientData: any) {
  try {
    const client = await Customer.create(clientData);
    return client;
  } catch (error) {
    console.error('Error while registering!!', error);
    throw error;
  }
}

export { createCustomer};

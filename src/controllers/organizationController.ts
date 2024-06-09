import { Request, Response } from 'express';
import { registerOrganization } from '../services/organizationService';

async function registerOrganizations(req: Request, res: Response) {
  try {
    const organization = await registerOrganization(req.body);
    res.status(201).json({ message: 'Organization registered successfully', organization });
  } catch (error) {
    console.error('Error while registering organization:', error);
    res.status(500).json({ error: 'Internal Server Error!!' });
  }
}


export { registerOrganizations };

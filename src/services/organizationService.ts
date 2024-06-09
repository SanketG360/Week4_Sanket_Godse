import { Organization } from '../models/organizationModel';

async function registerOrganization(data: any) {
  try {
    const organization = await Organization.create({
      ...data,
    });
    return organization;
  } catch (error) {
    console.error('Error while registering organization!!', error);
    throw error;
  }
}



export { registerOrganization };


import express from 'express';
import { registerOrganizations } from '../controllers/organizationController';
import { Organization } from '../models/organizationModel';

const router = express.Router();

router.post('/organizations/register', registerOrganizations);


export { router as organizationRoutes};

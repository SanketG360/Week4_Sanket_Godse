import express from 'express';
import { registerCustomer } from '../controllers/customerController';

const router = express.Router();

router.post('/register', registerCustomer);

export { router as customerRoutes };

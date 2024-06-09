import express from 'express';
import {createSOWHandler,findSOWByIdHandler,updateSOWHandler,deleteSOWHandler} from '../controllers/sowController';

const router = express.Router();


router.post('/sows', createSOWHandler);
router.get('/sows/find/:sowId', findSOWByIdHandler);
router.put('/sows/update/:sowId', updateSOWHandler);
router.delete('/sows/delete/:sowId', deleteSOWHandler);


export { router as sowRoutes};




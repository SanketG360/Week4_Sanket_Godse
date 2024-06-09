import {createSOW,findSOWById,updateSOW,deleteSOW} from '../services/sowService';
import { Request, Response } from 'express';
  
async function createSOWHandler(req: Request, res: Response) {
    try {
      const sowData = req.body;
      const sow = await createSOW(sowData);
      res.status(201).json(sow);
    } catch (error) {
      console.error('error while creating sow!!', error);
      res.status(500).json({ error: 'internal server error' });
    }
}
  
  
async function findSOWByIdHandler(req: Request, res: Response) {
    try {
      const sowId = req.params.sowId;
      const sow = await findSOWById(sowId);
      res.status(200).json(sow);
    } catch (error) {
      console.error('error while finding sow!!', error);
      res.status(500).json({ error: 'internal server error' });
    }
}
  
async function updateSOWHandler(req: Request, res: Response) {
    try {
      const sowId = req.params.sowId;
      const updateData = req.body;
      const sow = await updateSOW(sowId, updateData);
      res.status(200).json({ message: 'sow updated successfully', sow });
    } catch (error) {
      console.error('error while updating sow', error);
      res.status(500).json({ error: 'internal server error' });
    }
}
  
async function deleteSOWHandler(req: Request, res: Response) {
    try {
      const sowId = req.params.sowId;
      const result = await deleteSOW(sowId);
      res.status(200).json(result);
    } catch (error) {
      console.error('error while deleting sow', error);
      res.status(500).json({ error: 'internal server error' });
    }
}
  
export {createSOWHandler,findSOWByIdHandler,updateSOWHandler,deleteSOWHandler};
  
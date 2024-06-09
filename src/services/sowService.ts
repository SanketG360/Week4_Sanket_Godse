import { SOW } from '../models/sowManagementModel';

async function createSOW(sowData: any) {
  try {
    const sow = await SOW.create(sowData);
    return sow;
  } catch (error) {
    console.error('error while creating sow!!', error);
    throw error;
  }
}

async function findSOWById(sowId: string) {
  try {
    const sow = await SOW.findByPk(sowId);
    if (!sow) throw new Error('sow not found!!');
    return sow;
  } catch (error) {
    console.error('error to finding sow!!', error);
    throw error;
  }
}

async function updateSOW(sowId: string, updateData: any) {
  try {
    const sow = await findSOWById(sowId);
    if (!sow) throw new Error('sow not found!!');
    await sow.update(updateData);
    return sow;
  } catch (error) {
    console.error('error while updating sow!!', error);
    throw error;
  }
}

async function deleteSOW(sowId: string) {
  try {
    const sow = await findSOWById(sowId);
    if (!sow) throw new Error('sow not found!!');
    await sow.destroy();
    return { message: 'sow deleted successfully' };
  } catch (error) {
    console.error('error while deleting sow!!', error);
    throw error;
  }
}

export {createSOW,findSOWById,updateSOW,deleteSOW};

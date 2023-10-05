import { Router } from "express";
const router= Router();
import { getContracts, getContractById, createContract, updateContract, updateSomeContract, deleteContract } from '../controllers/CrudContracts.js';


// Routes of Users
router.get('/skillsTinder/v1/contracts', getContracts);
router.get('/skillsTinder/v1/contract/:id', getContractById);
router.post('/skillsTinder/v1/contract', createContract);
router.put('/skillsTinder/v1/contract/:id', updateContract);
router.patch('/skillsTinder/v1/contract/:id', updateSomeContract);
router.delete('/skillsTinder/v1/user/:id', deleteContract);


export default router;
import { Router } from "express";
const router= Router();
import { getQuotesContracts, getQuotAndContById, createQuotAndCont, updateQuotAndCont, updateSomeQuotAndCont, deleteQuotAndCont } from "../controllers/CrudQuotesContracts.js";


// Routes of Cotizacion/Contrato
router.get('/skillsTinder/v1/quotes/contracts', getQuotesContracts);
router.get('/skillsTinder/v1/quote/contract/:id', getQuotAndContById);
router.post('/skillsTinder/v1/quote/contract', createQuotAndCont);
router.put('/skillsTinder/v1/quote/contract/:id', updateQuotAndCont);
router.patch('/skillsTinder/v1/quote/contract/:id', updateSomeQuotAndCont);
router.delete('/skillsTinder/v1/quote/contract/:id', deleteQuotAndCont);



export default router;
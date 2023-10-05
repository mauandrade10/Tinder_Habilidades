import { Router } from "express";
const router= Router();
import { getQuotes ,getQuoteById, createQuote, updateQuote, updateSomeQuote, deleteQuote } from '../controllers/CrudQuotes.js';


// Routes of Users
router.get('/skillsTinder/v1/quotes', getQuotes);
router.get('/skillsTinder/v1/quote/:id', getQuoteById);
router.post('/skillsTinder/v1/quote', createQuote);
router.put('/skillsTinder/v1/quote/:id', updateQuote);
router.patch('/skillsTinder/v1/quote/:id', updateSomeQuote);
router.delete('/skillsTinder/v1/quote/:id', deleteQuote);


export default router;
import { Router } from "express";
const router= Router();
import { getCompanies, getCompanyById, createCompany, updateCompany, updateSomeCompany, deleteCompany } from "../controllers/CrudCompanies.js";

// Routes of Companies
router.get('/skillsTinder/v1/companies', getCompanies);
router.get('/skillsTinder/v1/company/:id', getCompanyById);
router.post('/skillsTinder/v1/company', createCompany);
router.put('/skillsTinder/v1/company/:id', updateCompany);
router.patch('/skillsTinder/v1/company/:id', updateSomeCompany);
router.delete('/skillsTinder/v1/company/:id', deleteCompany);


export default router;
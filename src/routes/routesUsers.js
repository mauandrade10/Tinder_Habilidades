import { Router } from "express";
const router= Router();
import { getUsers, createUsers, getUserById, deleteUser, updateUser , updateSomeUser } from '../controllers/CrudUsers.js';


// Routes of Users
router.get('/skillsTinder/v1/users', getUsers);
router.get('/skillsTinder/v1/user/:id', getUserById);
router.post('/skillsTinder/v1/user', createUsers);
router.put('/skillsTinder/v1/user/:id', updateUser);
router.patch('/skillsTinder/v1/user/:id', updateSomeUser);
router.delete('/skillsTinder/v1/user/:id', deleteUser);


export default router;
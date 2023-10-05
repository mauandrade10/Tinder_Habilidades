import { Router } from "express";
const router = Router();
import {
  getAbilities,
  getAbilityById,
  createAbility,
  updateAbility,
  updateSomeAbility,
  deleteAbility,
} from "../controllers/CrudAbilities.js";

// Routes of Abilities
router.get("/skillsTinder/v1/abilities", getAbilities);
router.get("/skillsTinder/v1/ability/:id", getAbilityById);
router.post("/skillsTinder/v1/ability", createAbility);
router.put("/skillsTinder/v1/ability/:id", updateAbility);
router.patch("/skillsTinder/v1/ability/:id", updateSomeAbility);
router.delete("/skillsTinder/v1/ability/:id", deleteAbility);

export default router;

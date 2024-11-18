import express from "express";
import {
  getActivities,
  addActivity,
  updateActivity,
  deleteActivity,
} from "../controllers/activityController.js";

const router = express.Router();

router.get("/activities", getActivities);
router.post("/activity/add", addActivity);
router.put("/activity/:id", updateActivity);
router.delete("/activity/:id", deleteActivity);

export default router;

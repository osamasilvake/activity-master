import mongoose from "mongoose";
import Activity from "../models/Activity.js";

export const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addActivity = async (req, res) => {
  const activity = new Activity({ description: req.body.description });
  try {
    const newActivity = await activity.save();
    res.status(201).json(newActivity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity)
      return res.status(404).json({ message: "Activity not found" });
    activity.completed = !activity.completed;
    const updatedActivity = await activity.save();
    res.json(updatedActivity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;

    // Convert the string to a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid activity ID" });
    }

    // Delete the activity by ID
    const activity = await Activity.findByIdAndDelete(id);

    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    res.status(200).json({ message: "Activity deleted successfully" });
  } catch (err) {
    console.error("Error deleting activity:", err);
    res.status(500).json({ message: "Error deleting activity" });
  }
};

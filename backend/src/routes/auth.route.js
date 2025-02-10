import express from "express";
import { checkAuth, deleteUser, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.delete("/delete/:id", protectRoute, deleteUser);

router.put("/update-profile", protectRoute, updateProfile)

router.get("/check", protectRoute, checkAuth)

export default router;

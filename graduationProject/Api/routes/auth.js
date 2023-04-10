import express from "express";
import { register, login, logout } from "../controllers/auth.js";

const router = express.Router();
router.post("/", (req, res) => {
  res.json("from controller!");
});

router.get("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;

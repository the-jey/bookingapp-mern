import express from "express";

import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verify.js";

const router = express.Router();

router.get("/checkauthentification", verifyToken, (req, res, next) => {
  res.send("Hello user, you're logged in!");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send(
    "Hello user, you're logged in and you have rights only on your account.."
  );
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hello admin, you're logged in and you have all rights.");
});

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getAllUsers);

export default router;

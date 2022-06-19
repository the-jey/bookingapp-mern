import express from "express";

import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
router.get("/:id", getRoom);
router.get("/", getAllRooms);

export default router;

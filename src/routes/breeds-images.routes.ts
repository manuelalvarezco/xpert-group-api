import express from "express";
import { findImagesByBreedId } from "../controllers/breeds-images.controller";

const router = express.Router();

router.get("/:id", async (req, res) => await findImagesByBreedId(req, res));

export default router;

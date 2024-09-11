import express from "express";
import { findBreeds, findBreedById, findBreedBySearch } from "../controllers/breeds.controller";

const router = express.Router();

router.get("/", async (_req, res) => await findBreeds(_req, res));
router.get("/:id", async (req: any, res) => await findBreedById(req.params.id, res));
router.get("/search", async (req, res) => await findBreedBySearch(req.query.params, res));

export default router;

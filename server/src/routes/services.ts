import { Router } from "express";

import {
  createService,
  getAllServices,
  updateService,
  getOneService,
} from "../controllers/services";
import upload from "../uploadMiddleware";

export const servicesRouter = Router();

servicesRouter.post("/", upload, createService);
servicesRouter.get("/", getAllServices);
servicesRouter.get("/:id", getOneService);
servicesRouter.put("/:id", updateService);

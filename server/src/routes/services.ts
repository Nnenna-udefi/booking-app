import { Router } from "express";
import multer from "multer";
import {
  createService,
  getAllServices,
  updateService,
  getOneService,
} from "../controllers/services";

export const servicesRouter = Router();

const upload = multer({ dest: "uploads/" });

servicesRouter.post("/", upload.single("image"), createService);
servicesRouter.get("/", getAllServices);
servicesRouter.get("/:id", getOneService);
servicesRouter.put("/:id", updateService);

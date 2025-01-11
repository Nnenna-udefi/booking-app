import { Router } from "express";
import multer from "multer";
import {
  createService,
  getAllServices,
  updateService,
} from "../controllers/services";

export const servicesRouter = Router();

const upload = multer({ dest: "uploads/" });

servicesRouter.post("/", upload.single("image"), createService);
servicesRouter.get("/", getAllServices);
servicesRouter.put("/:id", updateService);

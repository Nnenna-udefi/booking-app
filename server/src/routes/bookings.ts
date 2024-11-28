import { Router } from "express";
import {
  createBooking,
  getAllBookings,
  updateBooking,
} from "../controllers/bookings";

export const bookingsRouter = Router();

bookingsRouter.post("/", createBooking);
bookingsRouter.get("/", getAllBookings);
bookingsRouter.put("/:id", updateBooking);

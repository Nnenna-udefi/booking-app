import express, { Request, Response } from "express";

const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));
// Middleware to parse JSON
app.use(express.json());

interface Booking {
  time: string;
  date: string;
  service: string;
}

// In-memory array to store bookings
let bookings: Booking[] = [];

app.post("/api/bookings", (req: Request, res: Response) => {
  const booking = req.body;
  bookings.push(booking);
  res.status(201).json({ message: "Booking confirmed", booking });
});

app.get("/api/bookings", (req: Request, res: Response) => {
  res.json(bookings);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

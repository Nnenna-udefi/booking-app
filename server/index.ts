import express, { Request, Response } from "express";

const app = express();
const PORT = 5000;
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

app.use(cors({ origin: "http://localhost:3000" }));
// Middleware to parse JSON
app.use(express.json());

interface Booking {
  id: string;
  time: string;
  date: string;
  service: string;
  name: string;
  phoneNumber: string;
  price: string;
  status: string;
}

let bookings: Booking[] = [];

app.post("/api/bookings", (req: Request, res: Response) => {
  const { time, date, service, name, phoneNumber, price, status } = req.body;

  const newBooking: Booking = {
    id: uuidv4(),
    time,
    date,
    service,
    name,
    price,
    phoneNumber,
    status,
  };
  bookings.push(newBooking);
  res.status(201).json({ message: "Booking confirmed", newBooking });
});

app.put("/api/bookings/:id", (req, res) => {
  const { id } = req.params;
  console.log(`Updating booking with ID: ${id}`);
  const { status } = req.body;
  console.log(`status: ${status}`);
  const bookingIndex = bookings.findIndex((b) => b.id === id);

  bookings[bookingIndex].status = status;
  res.status(200).json({
    message: "Booking status updated",
    booking: bookings[bookingIndex],
  });
});

app.get("/api/bookings", (req: Request, res: Response) => {
  res.json(bookings);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

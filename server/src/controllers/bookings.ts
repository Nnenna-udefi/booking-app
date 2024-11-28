// logic for booking routes
import { RequestHandler } from "express";
import { Request, Response } from "express";
import { getDatabase } from "../database";
import { ObjectId } from "mongodb";

export const createBooking = async (req: Request, res: Response) => {
  const { time, date, service, name, phoneNumber, price, status } = req.body;
  const newBooking = {
    time,
    date,
    service,
    name,
    phoneNumber,
    price,
    status: "Awaiting",
  };

  try {
    const db = getDatabase();
    const result = await db.collection("bookings").insertOne(newBooking);

    if (result.acknowledged) {
      // Respond with the inserted document
      res.status(201).json({
        message: "Booking confirmed",
        booking: { id: result.insertedId.toString(), ...newBooking },
      });
    } else {
      res.status(500).json({ message: "Failed to create booking" });
    }
  } catch (err: any) {
    console.error("Error creating booking:", err);
    res.status(500).json({ message: "Failed to create booking" });
  }
};
export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const db = getDatabase();
    const bookings = await db.collection("bookings").find().toArray();

    const formattedBookings = bookings.map((booking) => ({
      ...booking,
      id: booking._id.toString(), // Convert ObjectId to string if needed
      _id: undefined, // Remove _id field
    }));

    res.status(200).json(formattedBookings);
  } catch (err: any) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};

export const updateBooking: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const db = getDatabase();
    const result = await db
      .collection("bookings")
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { status } },
        { returnDocument: "after" }
      );

    if (!result?.value) {
      res.status(404).json({ message: "Booking not found" });
      return;
    }

    const updatedBooking = {
      ...result.value,
      id: result.value._id.toString(),
      _id: undefined,
    };

    res.status(200).json({
      message: "Booking status updated",
      booking: updatedBooking,
    });
  } catch (err: any) {
    console.error("Error updating booking:", err);
    res.status(500).json({ message: "Failed to update booking" });
  }
};

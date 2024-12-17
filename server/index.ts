import express from "express";
import cors from "cors";
import { connectToDatabase } from "./src/database";
import { bookingsRouter } from "./src/routes/bookings";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "https://dc-braiding.onrender.com/" }));
app.use(express.json());

// Routes
app.use("/api/bookings", bookingsRouter);

// Database Connection
connectToDatabase()
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB Atlas:", err);
    process.exit(1); // Exit if the database connection fails
  });

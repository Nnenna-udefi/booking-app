import express from "express";
import cors from "cors";
import { connectToDatabase } from "./src/database";
import { bookingsRouter } from "./src/routes/bookings";
import { servicesRouter } from "./src/routes/services";
import path from "path";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: ["https://dc-braiding.onrender.com", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use("/uploads", express.static("uploads"), (req, res, next) => {
  console.log("Requested file:", req.path);
  next();
});
const uploadsDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
console.log(`Serving uploads from: ${path.join(process.cwd(), "uploads")}`);

// Routes
app.use("/api/bookings", bookingsRouter);
app.use("/api/services", servicesRouter);

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

// logic for service routes
import { RequestHandler } from "express";
import { Request, Response } from "express";
import { getDatabase } from "../database";
import { ObjectId } from "mongodb";

export const createService = async (req: Request, res: Response) => {
  const { name, description, duration, price } = req.body;
  const image = req.file?.path;

  if (!image) {
    res.status(400).json({ message: "Image is required" });
    return;
  }
  const newService = {
    name,
    description,
    duration,
    price,
    image,
  };

  try {
    const db = getDatabase();
    const result = await db.collection("services").insertOne(newService);

    if (result.acknowledged) {
      // Respond with the inserted document

      res.status(201).json({
        message: "Service confirmed",
        service: { id: result.insertedId.toString(), ...newService },
      });
    } else {
      res.status(500).json({ message: "Failed to create service" });
    }
  } catch (err: any) {
    console.error("Error creating service:", err);
    res.status(500).json({ message: "Failed to create service" });
  }
};
export const getAllServices = async (req: Request, res: Response) => {
  try {
    const db = getDatabase();
    const services = await db.collection("services").find().toArray();

    const formattedServices = services.map((service) => ({
      ...service,
      id: service._id.toString(), // Convert ObjectId to string if needed
      _id: undefined, // Remove _id field
    }));

    res.status(200).json(formattedServices);
  } catch (err: any) {
    console.error("Error fetching services:", err);
    res.status(500).json({ message: "Failed to fetch services" });
  }
};

export const getOneService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid service ID" });
      return;
    }

    const db = getDatabase();
    const service = await db.collection("services").findOne({
      _id: new ObjectId(id),
    });

    if (!service) {
      res.status(404).json({ message: "Service not found" });
      return;
    }

    const formattedService = {
      ...service,
      id: service._id.toString(),
      _id: undefined,
    };

    res.status(200).json(formattedService);
  } catch (err: any) {
    console.error("Error fetching service:", err);
    res.status(500).json({ message: "Failed to fetch service" });
  }
};

export const updateService: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const { id } = req.params;
  const { name, description, price, duration } = req.body;
  const image = req.file?.path;

  // Validate the service ID
  const trimmedId = id.trim();
  if (!ObjectId.isValid(trimmedId)) {
    res.status(400).json({ message: "Invalid service ID format" });
    return;
  }
  const objectId = new ObjectId(id);

  const updateData: any = { name, description, price, duration };
  if (image) {
    updateData.image = image;
  }

  try {
    const db = getDatabase();
    const result = await db.collection("services").findOneAndUpdate(
      { _id: objectId }, // Query with the valid ObjectId
      { $set: updateData },
      { returnDocument: "after" }
    );

    if (!result?.value) {
      res.status(404).json({ message: "Service not found" });
      return;
    }

    const updatedService = {
      ...result.value,
      id: result.value._id.toString(),
      _id: undefined, // Removing the MongoDB _id
    };

    res.status(200).json({
      message: "Service updated successfully",
      service: updatedService,
    });
  } catch (err: any) {
    console.error("Error updating service:", err);
    res.status(500).json({ message: "Failed to update service" });
  }
};

export const deleteService: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    // Validate the service ID
    if (!ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid service ID" });
      return;
    }

    const db = getDatabase();
    const result = await db
      .collection("services")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Service not found" });
      return;
    }

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (err: any) {
    console.error("Error deleting service:", err);
    res.status(500).json({ message: "Failed to delete service" });
  }
};

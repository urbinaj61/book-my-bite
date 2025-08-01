import mongoose from "mongoose";
import dbConnect from "../../../../db/connect";
import Booking from "../../../../db/schemas/bookings";

const handler = async (req, res) => {
  await dbConnect();
  const { _id, date } = req.query;

  if (!_id || !mongoose.Types.ObjectId.isValid(_id)) {
    console.error("Invalid or missing _id in request query:", _id);
    return res.status(400).json({
      status: "Bad Request",
      message: "A valid restaurant ID is required.",
    });
  }

  const queryId = new mongoose.Types.ObjectId(_id);

  if (req.method === "GET") {
    const booking = await Booking.find({
      restaurantId: queryId,
      dateBooked: date,
    });

    if (!booking) {
      res.status(404).json({ status: "Not Found" });
      return;
    }

    res.status(200).json(booking);
    return;
  }

  if (req.method === "POST") {
    try {
      const bookingData = req.body;
      await Booking.create(bookingData);
      res
        .status(201)
        .json({ status: "New booking has been added to database" });
    } catch (error) {
      console.error(error.message);
      res.status(400).json({ error: error.message });
    }
    return;
  }

  res.status(405).json({ status: "Method not allowed" });
};

export default handler;

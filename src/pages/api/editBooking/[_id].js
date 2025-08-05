import dbConnect from "../../../../db/connect";
import Booking from "../../../../db/schemas/bookings";

const handler = async (req, res) => {
  await dbConnect();
  const { _id } = req.query;

  if (req.method === "GET") {
    const booking = await Booking.findById(_id);

    if (!booking) {
      res.status(404).json({ status: "Not Found" });
      return;
    }

    res.status(200).json(booking);
    return;
  }

  if (req.method === "PUT") {
    const updatedBookingData = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(
      _id,
      updatedBookingData,
      { new: true }
    );

    if (updatedBooking) {
      return res.status(200).json({
        status: "Booking updated successfully",
        data: updatedBooking,
      });
    } else {
      return res.status(404).json({ status: "Booking not found" });
    }
  }

  res.status(405).json({ status: "Method not allowed" });
};

export default handler;

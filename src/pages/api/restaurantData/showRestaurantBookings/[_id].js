import dbConnect from "../../../../../db/connect";
import Booking from "../../../../../db/schemas/bookings";

const handler = async (req, res) => {
  await dbConnect();
  const { _id } = req.query;

  if (req.method === "GET") {
    const booking = await Booking.find({
      restaurantId: _id,
    }).sort({ dateBooked: -1, "timeSlot.start": 1 });

    if (!booking) {
      res.status(404).json({ status: "Not Found" });
      return;
    }

    res.status(200).json(booking);
    return;
  }

  if (req.method === "DELETE") {
    const deletedBooking = await Booking.findByIdAndDelete(_id);

    if (!deletedBooking) {
      return res.status(404).json({ status: "Booking not found" });
    }

    return res.status(200).json({ status: "Booking deleted successfully" });
  }

  res.status(405).json({ status: "Method not allowed" });
};

export default handler;

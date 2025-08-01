import dbConnect from "../../../../db/connect";
import Booking from "../../../../db/schemas/bookings";

const handler = async (req, res) => {
  await dbConnect();
  const { email, id } = req.query;

  const normalizedEmail = email.trim().toLowerCase();

  if (req.method === "GET") {
    const booking = await Booking.find({
      customerEmail: normalizedEmail,
    });

    if (!booking) {
      res.status(404).json({ status: "Not Found" });
      return;
    }

    res.status(200).json(booking);
    return;
  }

  if (req.method === "DELETE") {
    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({ status: "Booking not found" });
    }

    return res.status(200).json({ status: "Booking deleted successfully" });
  }

  res.status(405).json({ status: "Method not allowed" });
};

export default handler;

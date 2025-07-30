import dbConnect from "../../../../db/connect";
import Booking from "../../../../db/schemas/bookings";

const handler = async (req, res) => {
  await dbConnect();
  const { email } = req.query;

  const normalizedEmail = email.trim().toLowerCase();

  if (req.method === "GET") {
    const booking = await Booking.find({
      customerEmail: normalizedEmail,
    }).populate("restaurantId");

    if (!booking) {
      res.status(404).json({ status: "Not Found" });
      return;
    }

    res.status(200).json(booking);
    return;
  }

  res.status(405).json({ status: "Method not allowed" });
};

export default handler;

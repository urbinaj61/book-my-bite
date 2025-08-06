import dbConnect from "../../../../db/connect";
import Restaurant from "../../../../db/schemas/restaurants";

const handler = async (req, res) => {
  await dbConnect();
  const { email } = req.query;

  const normalizedEmail = email.trim().toLowerCase();

  if (req.method === "GET") {
    const restaurant = await Restaurant.find({
      email: normalizedEmail,
    });

    if (!restaurant) {
      res.status(404).json({ status: "Not Found" });
      return;
    }

    res.status(200).json(restaurant);
    return;
  }

  // if (req.method === "DELETE") {
  //   const deletedBooking = await Booking.findByIdAndDelete(id);

  //   if (!deletedBooking) {
  //     return res.status(404).json({ status: "Booking not found" });
  //   }

  //   return res.status(200).json({ status: "Booking deleted successfully" });
  // }

  res.status(405).json({ status: "Method not allowed" });
};

export default handler;

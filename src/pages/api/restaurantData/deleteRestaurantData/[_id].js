import dbConnect from "../../../../../db/connect";
import Restaurant from "../../../../../db/schemas/restaurants";
import Booking from "../../../../../db/schemas/bookings";

const handler = async (req, res) => {
  await dbConnect();
  const { _id } = req.query;

  if (req.method === "DELETE") {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(_id);

    if (!deletedRestaurant) {
      return res.status(404).json({ status: "Restaurant not found" });
    }

    await Booking.deleteMany({ restaurantId: deletedRestaurant._id });

    return res.status(200).json({
      status: "Restaurant and associated bookings deleted successfully",
    });
  }
};

export default handler;

import dbConnect from "../../../../../db/connect";
import Restaurant from "../../../../../db/schemas/restaurants";

const handler = async (req, res) => {
  await dbConnect();
  const { _id } = req.query;

  if (req.method === "PUT") {
    const updatedRestaurantData = req.body;

    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      _id,
      updatedRestaurantData,
      { new: true }
    );

    if (updatedRestaurant) {
      return res.status(200).json({
        status: "Restaurant updated successfully",
        data: updatedRestaurant,
      });
    } else {
      return res.status(404).json({ status: "Restaurant not found" });
    }
  }
};

export default handler;

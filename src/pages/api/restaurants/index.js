import dbConnect from "../../../../db/connect";
import Restaurants from "../../../../db/schemas/restaurants";

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "GET") {
    const restaurants = await Restaurants.find();
    res.status(200).json(restaurants);
  }
};

export default handler;

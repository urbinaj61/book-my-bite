import dbConnect from "../../../../db/connect";
import Restaurant from "../../../../db/schemas/restaurants";

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "GET") {
    const restaurant = await Restaurant.find();
    res.status(200).json(restaurant);
  }
};

export default handler;

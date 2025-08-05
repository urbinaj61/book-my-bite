import dbConnect from "../../../../db/connect";
import Restaurant from "../../../../db/schemas/restaurants";

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "GET") {
    const restaurant = await Restaurant.find().sort({ name: 1 });
    res.status(200).json(restaurant);
  }
  res.status(405).json({ status: "Method not allowed" });
};

export default handler;

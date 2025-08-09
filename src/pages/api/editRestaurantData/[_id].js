import mongoose from "mongoose";
import dbConnect from "../../../../db/connect";
import Restaurant from "../../../../db/schemas/restaurants";

const handler = async (req, res) => {
  await dbConnect();
  const { _id } = req.query;

  if (req.method === "GET") {
    const restaurant = await Restaurant.findById(_id);

    if (!restaurant) {
      res.status(404).json({ status: "Not Found" });
      return;
    }

    res.status(200).json(restaurant);
    return;
  }

  res.status(405).json({ status: "Method not allowed" });
};

export default handler;

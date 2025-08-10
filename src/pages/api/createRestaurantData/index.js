import dbConnect from "../../../../db/connect";
import Restaurant from "../../../../db/schemas/restaurants";

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const restaurantData = req.body;
      const _id = await Restaurant.create(restaurantData);
      res.status(201).json({
        status: "New restaurant has been added to the database",
        _id,
      });
    } catch (error) {
      console.error(error.message);
      res.status(400).json({ error: error.message });
    }
    return;
  }
};

export default handler;

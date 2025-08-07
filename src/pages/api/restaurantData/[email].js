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

  res.status(405).json({ status: "Method not allowed" });
};

export default handler;

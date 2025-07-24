import dbConnect from "../../../../db/connect";
import Categories from "../../../../db/schemas/categories";

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "GET") {
    const categories = await Categories.find();
    res.status(200).json(categories);
  }
};

export default handler;

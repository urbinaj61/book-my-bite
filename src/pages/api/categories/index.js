import dbConnect from "../../../../db/connect";
import Category from "../../../../db/schemas/categories";

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "GET") {
    const category = await Category.find();
    res.status(200).json(category);
  }
};

export default handler;

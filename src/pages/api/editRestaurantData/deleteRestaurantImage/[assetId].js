import dbConnect from "../../../../../db/connect";
import Restaurant from "../../../../../db/schemas/restaurants";

const handler = async (req, res) => {
  await dbConnect();
  const { assetId, _id } = req.query;

  if (req.method === "DELETE") {
    const result = await Restaurant.updateOne(
      { _id },
      { $pull: { images: { assetId: assetId } } }
    );

    if (result.modifiedCount === 0) {
      res.status(404).json({ status: "Image not found or no changes made" });
      return;
    }

    return res.status(200).json({ status: "Image successfully deleted" });
  }

  res.status(405).json({ status: "Method not allowed" });
};

export default handler;

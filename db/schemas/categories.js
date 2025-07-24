import { Schema, model, models } from "mongoose";

const CategoriesSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Categories = models.Categories || model("Categories", CategoriesSchema);

export default Categories;

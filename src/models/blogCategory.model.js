import mongoose, { Schema } from "mongoose";

const metaDataSchema = new Schema(
  {
    name: String,
    slug: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const BlogCategoryModel =
  mongoose.models.BlogCategory ||
  mongoose.model("BlogCategory", metaDataSchema);
export default BlogCategoryModel;

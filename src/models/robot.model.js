import mongoose, { Schema } from "mongoose";

const robotSchema = new Schema(
  {
    sitemap_url: String,
    user_agent: String,
    allow: String,
    disallow: String
  },
  {
    timestamps: true,
  }
);

const RobotTxtModel =
  mongoose.models.RobotTxt || mongoose.model("RobotTxt", robotSchema);
export default RobotTxtModel;

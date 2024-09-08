import mongoose, { Schema } from "mongoose";

const metaDataSchema = new Schema(
  {
    title: String,
    url: String,
  },
  {
    timestamps: true,
  }
);

const VerificationSiteModel =
  mongoose.models.verificationSite ||
  mongoose.model("verificationSite", metaDataSchema);
export default VerificationSiteModel;

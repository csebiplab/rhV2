import VerificationSiteModel from "@/models/site-verification.model";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const { id } = params;
  const { title, url } = await request.json();
  await connectMongoDB();
  const verificationData = await VerificationSiteModel.findByIdAndUpdate(id, {
    title,
    url,
  });
  return NextResponse.json({ verificationData }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const verificationData = await VerificationSiteModel.findOne({ _id: id });
  return NextResponse.json({ verificationData }, { status: 200 });
}

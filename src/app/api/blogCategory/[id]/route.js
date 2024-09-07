import connectMongoDB from "@/lib/db";
import BlogCategoryModel from "@/models/blogCategory.model";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const { id } = params;
  const updatedFields = await request.json();
  await connectMongoDB();
  const data = await BlogCategoryModel.findByIdAndUpdate(id, {
    ...updatedFields
  });
  return NextResponse.json({ data }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const data = await BlogCategoryModel.findOne({ _id: id });
  return NextResponse.json({ data }, { status: 200 });
}

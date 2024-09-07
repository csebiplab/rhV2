import connectMongoDB from "@/lib/db";
import BlogCategoryModel from "@/models/blogCategory.model";
import { NextResponse } from "next/server";


export async function POST(request) {
  try {
    const { name, slug, description } = await request.json();
    await connectMongoDB();
    await BlogCategoryModel.create({
      name,
      slug,
      description,
    });
    return NextResponse.json(
      { message: "BLog category is generated" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error to create category:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const data = await BlogCategoryModel.find();
  return NextResponse.json({ data });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await BlogCategoryModel.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog category is  deleted" },
    { status: 200 }
  );
}

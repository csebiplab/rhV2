import convertToLink from "@/helpers/trimSpace";
import connectMongoDB from "@/lib/db";
import BlogModel from "@/models/blog.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { blogTitle, metaTitle, customLink, metaDescription, metaKeywords, shortDescription, content } = await request.json();
    // console.log({ blogTitle, metaTitle, metaDescription, metaKeywords, shortDescription, content })
    const convertLink = convertToLink(customLink)
    await connectMongoDB();
    await BlogModel.create({ blogTitle, metaTitle, customLink: convertLink, metaDescription, metaKeywords, shortDescription, content });
    return NextResponse.json(
      { message: "Blog content Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error storing blog content:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const sortFields = ['updatedAt', -1]
  const data = await BlogModel.find().sort([sortFields]);
  return NextResponse.json({ data });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog deleted" },
    { status: 200 }
  );
}

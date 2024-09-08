import connectMongoDB from "@/lib/db";
import SitemapModel from "@/models/sitemap.model";
import { NextResponse } from "next/server";



export async function POST(request) {
  const { changefreq, loc, priority } = await request.json();
  await connectMongoDB();

  const data = await SitemapModel.create({ changefreq, loc, priority });

  return NextResponse.json(
    {
      message: "Request success",
      data: data
    },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const data = await SitemapModel.find();
  return NextResponse.json(
    {
      message: "Request success",
      data: data
    },
    { status: 200 }
  );
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  await connectMongoDB();

  await SitemapModel.findByIdAndDelete(id);

  return NextResponse.json(
    {
      message: "Request success",
    },
    { status: 200 }
  );
}

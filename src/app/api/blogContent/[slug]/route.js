
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
import convertToLink from "@/helpers/trimSpace";
import BlogModel from "@/models/blog.model";


export async function PATCH(request, { params }) {
  const { slug } = params;
  const { blogTitle, metaTitle, customLink, metaDescription, metaKeywords, shortDescription, content } = await request.json();
  const id = slug;
  const convertLink = convertToLink(customLink)
  await connectMongoDB();
  const blogList = await BlogModel.findByIdAndUpdate(id, {
    blogTitle,
    metaTitle,
    customLink: convertLink,
    metaDescription,
    metaKeywords,
    shortDescription,
    content
  });
  return NextResponse.json({ blogList }, { status: 200 });
}

export async function GET(request, { params }) {
  try {
    const { slug } = params;

    if (!slug || typeof slug !== 'string') {
      throw new Error('Invalid slug parameter');
    }

    await connectMongoDB();

    let blogDetailsData;

    // Check if slug is a valid ObjectId
    if (ObjectId.isValid(slug)) {
      // If slug is a valid ObjectId, search by _id
      blogDetailsData = await BlogModel.findOne({ '_id': new ObjectId(slug) });
    } else {
      // If not a valid ObjectId, search by id or customLink
      blogDetailsData = await BlogModel.findOne({ 'customLink': slug });
    }

    if (!blogDetailsData) {
      // If no data found, return a 404 response
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Return the found blog details
    return NextResponse.json({ blogDetailsData }, { status: 200 });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


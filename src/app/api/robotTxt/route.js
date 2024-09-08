import connectMongoDB from "@/lib/db";
import RobotTxtModel from "@/models/robot.model";
import { NextResponse } from "next/server";


export async function POST(request) {
  const payload = await request.json()
  await connectMongoDB();

  const data = await RobotTxtModel.create({ ...payload })

  return NextResponse.json(
    {
      stataus: 201,
      message: "Request success",
      data: data
    },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();

  const data = await RobotTxtModel.find();
  return NextResponse.json(
    {
      message: "Request success",
      data: data
    },
    { status: 200 }
  );
}

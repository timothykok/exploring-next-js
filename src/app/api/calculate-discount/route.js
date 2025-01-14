// app/api/calculate-discount/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { price, discountRate } = await req.json();

    if (!price || !discountRate) {
      return NextResponse.json(
        { error: "Price and discountRate are required." },
        { status: 400 }
      );
    }

    const discountedPrice = price - price * (discountRate / 100);
    return NextResponse.json({ discountedPrice });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "This route supports POST only." });
}
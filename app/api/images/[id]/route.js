// app/api/images/[id]/route.js

import { CONNECT_MONGO_DB } from "../../ConnectMongoDB"; // Adjust the path as needed
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // If you're using MongoDB

export async function GET(request, { params }) {
  const { id } = params;

  try {
    // 1. Connect to your database
    const db = await CONNECT_MONGO_DB();
    const productsCollection = db.collection("products"); // Replace with your collection name

    // 2. Fetch the product from the database using its ID
    const product = await productsCollection.findOne({ _id: new ObjectId(id) });

    if (!product || !product.image) {
      return new NextResponse("Image not found", { status: 404 });
    }

    // 3. Assume the image is stored as a Base64 string in `product.image`
    const base64String = product.image;

    // Remove the 'data:image/jpeg;base64,' part if it exists
    const base64Image = base64String.split(";base64,").pop();

    // 4. Decode the Base64 string into a buffer
    const imageBuffer = Buffer.from(base64Image, "base64");

    // 5. Determine the content type (e.g., 'image/jpeg', 'image/png')
    // This is important for the browser to display the image correctly.
    // You might need to store this in your DB or infer it from the base64 string.
    const contentType = "image/jpeg"; // Or whatever is appropriate for your images

    // 6. Return the image data with the correct headers
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Length": imageBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

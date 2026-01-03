'use server' // This directive tells Next.js this code runs only on the server


import { redirect } from "next/navigation";
import dbConnect from "@/lib/dbConnect";
import Prayer from "@/models/prayerRequestSchema";



export async function handleFormSubmission(prevState: any, formData: FormData) {
  let isSuccessful = false;

  try {
    // 1. Grab the data and convert to string
    const requestText = formData.get("prayerRequest") as string;

    // 2. CHECK: Is it empty or just spaces?
    if (!requestText || requestText.trim().length === 0) {
      return {
        success: false,
        error: "Please enter a prayer request before submitting.",
      };
    }

    // 3. Ensure we are connected
    await dbConnect();

    // 4. Save using Mongoose (trimming removes accidental spaces at start/end)
    const created = await Prayer.create({
      prayerRequest: requestText.trim(),
    });

    // console.log(created, 'was created');
    // console.log("Prayer saved successfully!");
    isSuccessful = true;
  } catch (error) {
    console.log(error, "is the error");
    // Check for Mongoose validation errors (like maxlength)
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }

  if (isSuccessful) {
    redirect("/prayer/received");
  }
}
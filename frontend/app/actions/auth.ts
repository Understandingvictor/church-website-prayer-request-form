"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import Prayer from "@/models/prayerRequestSchema";
import dbConnect from "@/lib/dbConnect";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function login(prevState: any, formData: FormData) {
  const password = formData.get("password");

  //console.log(password, "is the password");

    if (password === ADMIN_PASSWORD) {
      const loginTime = new Date().toISOString(); // Capture current time
      // 1. Give the browser the "Stamp" (Cookie)
      const cookieStore = await cookies();
      cookieStore.set("admin_session", loginTime, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        path: "/",
      });

      // 2. RETURN SUCCESS instead of redirecting here
      // This allows the Login Page's useEffect to run router.replace()
      return { success: true };
    } else {
    // 3. Return error if password fails
    return { error: "Wrong password! Try again." };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session"); // This removes the "Stamp"
}



// export async function markAsViewed(id: string) {
//   await Prayer.findByIdAndUpdate(id, { viewed: true });
//   revalidatePath("/prayer/admin/prayers"); // Refresh the data on the dashboard
// }

export async function markAsViewed(id: string) {
  await dbConnect(); // Ensure DB is connected
  await Prayer.findByIdAndUpdate(id, { viewed: true });
  revalidatePath("/prayer/admin/prayers");
}
import dbConnect from "@/lib/dbConnect";
import Prayer from "@/models/prayerRequestSchema";
import PrayerCard from "@/app/component/prayerCard";
import DateRangePicker from "@/app/component/DateRangePicker";
import { logout } from "@/app/actions/auth"; // 1. Import logout
import { redirect } from "next/navigation"; // 2. Import redirect
import {cookies} from "next/headers";




export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ start?: string; end?: string }>;
}) {

  // Get the login time from the cookie
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("admin_session");
  const lastLoginTime = sessionCookie
    ? new Date(sessionCookie.value)
    : new Date();

  //connect to my db
  await dbConnect();

  const { start, end } = await searchParams;

  // 1. Build the Mongoose Query based on the range
  let query: any = {};
  if (start || end) {
    query.createdAt = {};
    if (start) query.createdAt.$gte = new Date(start);
    if (end) {
      const endDate = new Date(end);
      endDate.setHours(23, 59, 59, 999); // Include the full end day
      query.createdAt.$lte = endDate;
    }
  }

  // 2. Fetch data from local MongoDB
  const prayers = await Prayer.find(query).sort({ createdAt: -1 });

  // 3. Logout handler for the form
  const handleLogout = async () => {
    "use server";
    await logout();
    redirect("/prayer/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-pop2">
      <div className="max-w-6xl mx-auto">
        {/* Top Section: Title and Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Prayer Wall
            </h1>
            <p className="text-purple-600 font-medium">
              Administration & Records
            </p>
          </div>

          {/* Client component for picking dates 
          <DateRangePicker />*/}
          {/* LOGOUT BUTTON SECTION */}
          <form action={handleLogout}>
            <button
              type="submit"
              className="bg-red-50 text-red-600 border border-red-100 px-6 py-2 rounded-lg font-bold text-sm hover:bg-red-600 hover:text-white transition-all active:scale-95"
            >
              LOGOUT
            </button>
          </form>
        </div>

        {/* --- YOUR NEW BADGE SECTION --- */}
        <div className="mb-6 flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm border border-purple-200">
            Showing {prayers.length}{" "}
            {prayers.length === 1 ? "Request" : "Requests"}
          </span>
          {(start || end) && (
            <span className="text-[10px] text-gray-400 font-bold uppercase italic">
              Filtered by date range
            </span>
          )}
        </div>
        {/* ------------------------------ */}

        {/* Grid Display */}
        {prayers.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-purple-100">
            <div className="text-purple-200 mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p className="text-gray-400 font-medium tracking-wide">
              No prayer points found for this selection.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prayers.map((item: any) => {
              // 2. Check: Is the prayer date LATER than the login time?
               
              //const isNew = prayerDate > lastLoginTime;

              //console.log(isNew, "is whether new");
              //console.log(prayerDate, "is prayerDate");

              return (
                <PrayerCard
                  key={item._id.toString()}
                  id={item._id.toString()}
                  text={item.prayerRequest}
                  date={item.createdAt}
                  viewed={!!item.viewed}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function DateRangePicker() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const start = formData.get("start");
    const end = formData.get("end");

    // Update URL with selected dates
    router.push(`/admin/dashboard?start=${start}&end=${end}`);
  };

  return (
    <form
      onSubmit={handleFilter}
      className="flex flex-wrap items-center gap-3 bg-white p-3 rounded-xl border border-purple-100 shadow-sm"
    >
      <div className="flex items-center gap-2">
        <label className="text-xs font-bold text-gray-500 uppercase">
          From
        </label>
        <input
          type="date"
          name="start"
          defaultValue={searchParams.get("start") || ""}
          className="text-sm border-purple-100 border-2 rounded p-1 focus:border-purple-500 outline-none"
        />
      </div>
      <div className="flex items-center gap-2">
        <label className="text-xs font-bold text-gray-500 uppercase">To</label>
        <input
          type="date"
          name="end"
          defaultValue={searchParams.get("end") || ""}
          className="text-sm border-purple-100 border-2 rounded p-1 focus:border-purple-500 outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-purple-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-purple-600"
      >
        Filter
      </button>
      <button
        type="button"
        onClick={() => router.push("/admin/dashboard")}
        className="text-gray-400 text-xs hover:underline"
      >
        Reset
      </button>
    </form>
  );
}

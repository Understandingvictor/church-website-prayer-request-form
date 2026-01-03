"use client"; // This MUST be at the very top

import React from "react";
import { markAsViewed } from "../actions/auth";

interface PrayerCardProps {
  text: string;
  date: Date;
  viewed: boolean; // Use the value from DB
  id: string;
  //isNew?: boolean; // The '?' means it is optional
}

export default function PrayerCard({ text, date, viewed, id }: PrayerCardProps) {
  //console.log(isNew, "is whther new");
  return (
    <div className="bg-white border-l-4 border-purple-500 p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative">
      {/* 3. The Red Badge UI 
      {isNew && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow-lg animate-pulse">
          NEW
        </span>
      )}*/}

      {!viewed && (
        <div className="flex justify-between items-start mb-2">
          <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm">
            NEW
          </span>
          <button
            onClick={() => markAsViewed(id)}
            className="text-[10px] font-bold text-purple-600 hover:text-purple-800 uppercase tracking-widest"
          >
            ✓ Mark Read
          </button>
        </div>
      )}
      <div className="flex flex-col gap-3">
        {/* The Prayer Text */}
        <p className="text-gray-800 leading-relaxed font-medium">"{text}"</p>

        {/* Footer with Date */}
        <div className="flex items-center justify-between mt-2 pt-3 border-t border-purple-50">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
            Prayer Request
          </span>
          <span className="text-xs text-gray-400">
            {new Date(date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

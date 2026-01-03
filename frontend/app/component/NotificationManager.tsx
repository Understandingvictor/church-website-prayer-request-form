// 1. Create a Client Component called NotificationManager.tsx
"use client";

import { useEffect, useState } from "react";

export default function NotificationManager() {
  const [lastViewed, setLastViewed] = useState<number>(0);

  useEffect(() => {
    // Get the timestamp from the browser's memory
    const saved = localStorage.getItem("last_viewed_prayers");
    if (saved) setLastViewed(parseInt(saved));
  }, []);

  const markAsRead = () => {
    const now = Date.now();
    localStorage.setItem("last_viewed_prayers", now.toString());
    setLastViewed(now);
    window.location.reload(); // Refresh to clear the red badges
  };

  return (
    <button 
      onClick={markAsRead}
      className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded hover:bg-purple-200 font-bold"
    >
      MARK ALL AS READ
    </button>
  );
}
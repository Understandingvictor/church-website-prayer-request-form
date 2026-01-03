import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/component/footer";
import {
  Calendar,
  Clock,
  MapPin,
  Zap,
  Crown,
  Music,
  ShieldCheck, Flame,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 overflow-x-hidden">
      {/* 1. MODERN HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center  bg-[#0f071a]  overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-600/10 blur-[120px] rounded-full animate-float-delayed" />

        <div className="relative z-10 text-center mt-5 px-6 max-w-8xl w-full flex flex-col items-center">
          {/* Container for Badge + Logo */}
          <div className="relative w-full mt-2 flex justify-center items-center mb-16">
            {/* Centered Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-relaxed">
                Prince of Peace Redemption Ministries Enugu
              </span>
            </div>

            {/* Logo: Positioned Absolutely to the right */}
            <div className="lg:absolute md:absolute sm:relative lg:top-0.4 right-0 md:right-30 lg:right-50">
              <Image
                src="/logo.png"
                alt="pprm logo"
                width={100}
                height={20}
                className="w-[40px] md:w-[60px] lg:w-[80px] h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Main Title: Increased bottom margin (mb-10) and line height (leading-tight) */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] mb-10 tracking-tight">
            Bringing Salvation & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Deliverance
            </span>
          </h1>

          {/* Description: Increased bottom margin (mb-14) and line height for readability */}
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-14 font-light leading-relaxed tracking-wide">
            We are committed to the total transformation of humanity through the
            power of the Word.
          </p>

          {/* Buttons: Increased gap (gap-8) between them for a wider feel */}
          <div className="flex mb-5 flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto">
            <Link
              href="/prayer"
              className="w-full sm:w-auto px-12 py-5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-[0_10px_30px_rgba(234,88,12,0.3)] tracking-widest text-sm"
            >
              REQUEST PRAYER
            </Link>
            <Link href="/comingSoon">
              <button className="w-full sm:w-auto px-12 py-5  bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl font-bold backdrop-blur-md transition-all tracking-widest text-sm">
                WATCH ONLINE
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SERVICE SCHEDULE (GLASS CARDS) */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-black text-slate-900">
                Weekly Encounters
              </h2>
              <div className="h-1.5 w-24 bg-purple-600 mt-4 rounded-full" />
            </div>
            <p className="text-slate-500 max-w-md">
              Experience God&apos;s presence in our organized weekly gatherings
              designed for your spiritual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Thursday */}
            <div className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-xl hover:border-orange-500/50 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={80} />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thursday Service</h3>
              <p className="text-orange-600 font-bold text-lg mb-4 underline decoration-2">
                Aka Jehovah 5:50 PM
              </p>
              <p className="text-slate-500">
                A midweek prophetic charge to sustain your fire and break every
                yoke.
              </p>
            </div>

            {/* Sunday */}
            <div className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-xl hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                <Crown size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sunday Service</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold uppercase">
                    1st
                  </div>
                  <span className="text-slate-700 font-medium">7:30 AM</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold uppercase">
                    2nd
                  </div>
                  <span className="text-slate-700 font-medium">9:00 AM</span>
                </div>
              </div>
            </div>

            {/* Monthly Vigil */}
            <div className="group p-8 rounded-3xl bg-[#2e1065] text-white shadow-2xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-md">
                <Flame size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Fire Night</h3>
              <p className="text-purple-300 font-medium mb-4 italic">
                First Friday of Every Month
              </p>
              <div className="flex items-center gap-2 text-xl font-bold text-orange-400 mb-4">
                <Clock size={20} />
                <span>10:00 PM</span>
              </div>
              <p className="text-purple-200/80 text-sm">
                A night of deep word, intense worship, and miraculous wonders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ANNUAL FLAGSHIP PROGRAMS */}
      <section className="py-24 px-6 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="bg-white p-10 rounded-[2rem] shadow-2xl relative">
              <h3 className="text-3xl font-black text-slate-900 mb-6">
                God&apos;s Atmosphere
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our premier annual worship experience held in the{" "}
                <span className="font-bold">First Week of November.</span> We
                bring together worshippers from all walks of life for a
                non-denominational encounter with the King.
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-bold">
                <Calendar size={18} />
                <span>November Annual Program</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#2e1065] p-10 rounded-[2rem] shadow-2xl text-white">
              <h3 className="text-3xl font-black mb-6">God of Vengeance</h3>
              <p className="text-purple-200 leading-relaxed mb-6">
                Every <span className="font-bold">August</span>, we gather for a
                specialized season of spiritual warfare, using the weapon of
                God&apos;s vengeance to cast down every long-standing
                stronghold.
              </p>
              <div className="flex items-center gap-2 text-orange-400 font-bold">
                <ShieldCheck size={18} />
                <span>August Annual Program</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL FOOTER */}
      <Footer />
    </main>
  );
}

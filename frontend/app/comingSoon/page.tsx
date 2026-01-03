import Link from "next/link";
import { MoveLeft, BellRing, Sparkles } from "lucide-react";

export default function ComingSoon({ pageName }: { pageName: string }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0f071a] overflow-hidden px-6">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-600/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Icon Badge */}
        <div className="inline-flex items-center mt-5 justify-center w-20 h-20 rounded-3xl bg-white/5 border border-white/10 mb-8 backdrop-blur-xl shadow-2xl">
          <Sparkles className="text-orange-500 w-10 h-10 animate-pulse" />
        </div>

        {/* Text Content */}
        <h2 className="text-purple-400 font-bold tracking-[0.3em] uppercase text-sm mb-4">
          Coming Soon
        </h2>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
          {pageName} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            Is Underway
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg mx-auto font-light">
          We are preparing something divine for the{" "}
          <span className="text-white font-medium italic">PPRM Enugu</span>{" "}
          digital experience. Stay tuned for a breakthrough encounter.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-2xl font-bold transition-all backdrop-blur-md"
          >
            <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <Link href='/prayer'>
            <button className="flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-bold transition-all hover:scale-105 shadow-[0_10px_30px_rgba(234,88,12,0.3)]">
              <BellRing className="w-5 h-5" />
              SUBMIT A PRAYER REQUEST
            </button>
          </Link>
        </div>

        {/* Progress Bar Detail */}
        <div className="mt-20 max-w-xs mx-auto">
          <div className="flex justify-between text-xs text-purple-400 uppercase tracking-widest mb-2 font-bold">
            <span>Preparation</span>
            <span>85%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
            <div className="h-full bg-gradient-to-r from-purple-600 to-orange-500 w-[85%] rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

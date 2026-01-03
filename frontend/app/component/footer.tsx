import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f071a] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* 1. BRAND & ADDRESS */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-xl md:text-2xl font-black mb-6 tracking-tighter leading-tight">
            PRINCE OF PEACE REDEMPTION <br className="hidden md:block" />
            MINISTRIES <span className="text-orange-500">ENUGU</span>
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-gray-400 max-w-sm">
              <MapPin className="text-orange-500 shrink-0 mt-1" size={20} />
              <p className="text-sm font-pop2">
                5 Chief Mark Igwe Street, Opposite WACOL, New Haven Extension,
                Emene, Enugu.
              </p>
            </div>
            
            <a href="tel:+2348062571932" className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors">
              <Phone className="text-orange-500 shrink-0" size={18} />
              <span className="text-sm font-pop2">08062571932</span>
            </a>
          </div>
        </div>

        {/* 2. QUICK LINKS */}
        <div>
          <h4 className="font-bold text-lg mb-6">Explore</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-pop2">
            <li><Link href="/prayer" className="hover:text-orange-500 transition-colors">Prayer Wall</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition-colors">Livestream</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition-colors">Giving</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition-colors">Testimonies</Link></li>
          </ul>
        </div>

        {/* 3. CONNECT (Using your custom Icons) */}
        <div>
          <h4 className="font-bold text-lg mb-6">Connect</h4>
          <div className="flex flex-wrap gap-4">
            {/* Email */}
            <a href="mailto:princeofpeaceenugu@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition-all hover:scale-110">
              <Image src="/email.png" width={20} height={20} alt="Email" className="w-5 h-auto invert" />
            </a>

            {/* Facebook */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition-all hover:scale-110">
              <Image src="/facebook.png" width={20} height={20} alt="Facebook" className="w-5 h-auto invert" />
            </a>

            {/* YouTube */}
            <a href="https://www.youtube.com/@PPRMENUGU" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition-all hover:scale-110">
              <Image src="/youtube.png" width={20} height={20} alt="YouTube" className="w-5 h-auto invert" />
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/2348168596976" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition-all hover:scale-110">
              <Image src="/whatsapp (1).png" width={20} height={20} alt="WhatsApp" className="w-5 h-auto invert" />
            </a>
          </div>
        </div>
      </div>

      {/* 4. COPYRIGHT SECTION */}
      <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs font-pop2">
        <p suppressHydrationWarning>
          © {new Date().getFullYear()} PPRM ENUGU. All rights reserved. 
          <span className="block mt-2 opacity-50 uppercase tracking-widest text-[10px]">Built for Global Salvation</span>
        </p>
      </div>
    </footer>
  );
}
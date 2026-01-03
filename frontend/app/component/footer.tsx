import Image from "next/image";



export default function Footer() {
    return (
      <div>
        <footer>
          <section>
            <div className="flex gap-3 mt-15 mb-15 md:mt-20 md:mb-20">
              <a href="mailto:princeofpeaceenugu@gmail.com">
                <Image
                  src="/email.png"
                  width={100}
                  height={20}
                  className="w-[30px] md:w-[45px] lg:w-[36px] h-auto cursor-pointer hover:scale-110 transition-transform"
                  alt="email"
                  priority
                />
              </a>

              <a href="tel:+2348062571932">
                <Image
                  src="/mobile.png"
                  width={100}
                  height={20}
                  alt="mobile"
                  className="w-[30px] md:w-[45px] lg:w-[36px] h-auto cursor-pointer hover:scale-110 transition-transform"
                />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/facebook.png"
                  width={100}
                  height={20}
                  alt="facebook"
                  className="w-[30px] md:w-[45px] lg:w-[36px] h-auto cursor-pointer hover:scale-110 transition-transform"
                />
              </a>

              <a
                href="https://www.youtube.com/@PPRMENUGU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/youtube.png"
                  width={100}
                  height={20}
                  alt="youtube"
                  className="w-[30px] md:w-[45px] lg:w-[36px] h-auto cursor-pointer hover:scale-110 transition-transform"
                />
              </a>

              <a
                href="https://wa.me/2348168596976"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/whatsapp (1).png"
                  width={100}
                  height={20}
                  alt="whatsapp"
                  className="w-[30px] md:w-[45px] lg:w-[36px] h-auto cursor-pointer hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </section>
          <section className="mt-8">
            <div>
              <h4 className="font-pop1 md:text-lg">
                PRINCE OF PEACE REDEMPTION MINISTRIES ENUGU
              </h4>
              <p className="font-pop2 text-xs">
                5 Chief Mark Igwe street Opposite WACOL New Haven Extension
                Emene Enugu
              </p>
              <a href="tel:+2348062571932">
                <p className="font-pop2 text-xs mt-3 mb-3">08062571932</p>
              </a>
            </div>
            <div className="mt-15 md:mt-20">
              <p className="font-pop2 text-xs text-center opacity-65">
                © {new Date().getFullYear()} PPRM ENUGU. All rights reserved.
              </p>
            </div>
          </section>
        </footer>
      </div>
    );
}
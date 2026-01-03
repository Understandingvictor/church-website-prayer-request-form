import Image from "next/image";
import Footer from "@/app/component/footer";

export default function AcknowledgedPage() {
    return (
      <div className="lg:bg-gray-200 lg:flex lg:justify-center">
        <div className="m-3 lg:bg-white lg:flex lg:flex-col lg:shadow-sm rounded-lg  shadow-gray-400 lg:w-[90%] lg:p-3 ">
          <div>
            <header>
              <div className="flex gap-2 mt-5">
                <div className="border-r-2  pr-2">
                  <Image
                    src="/logo.png"
                    alt="pprm logo"
                    width={100}
                    height={20}
                    className="w-[30px] md:w-[50px] lg:w-[75] h-auto"
                    sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 300px"
                    priority
                  />
                </div>
                <div className=" md:flex md:items-center">
                  <h2 className="text-xs font-bold text-gray-800 tracking-wide uppercase">
                    {" "}
                    Prince of Peace Redemption Ministries, Enugu
                  </h2>
                </div>
              </div>
            </header>
            <section>
              <div className=" border-gray-400 mt-20 border-0 p-3 rounded-sm shadow-gray-500 shadow-lg ">
                <p className="opacity-70 font-pop2 ml-2 mt-5 mb-5">
                  Prayer request submitted...
                </p>
                <h1 className="text-8xl font-pop1 leading-loose ">
                  WE ARE <span className="text-purple-500">PRAYING</span> FOR
                  YOU
                </h1>
                <p className="opacity-70 font-pop2 ml-2 mt-5 mb-5">
                  Be expectant of a testimony
                </p>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      </div>
    );
}

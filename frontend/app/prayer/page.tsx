"use client";

import Image from "next/image";
import Footer from "../component/footer";
import Carousel from "../components/Carousel";
import { handleFormSubmission } from "../actions/action1";
import { useActionState, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Prayer() {
  const [state, formAction, isPending] = useActionState(
    handleFormSubmission,
    null
  );
  const [charCount, setCharCount] = useState(0);

  return (
    <div className="min-h-screen  bg-slate-50 lg:bg-gray-100 flex justify-center selection:bg-purple-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="  w-full lg:w-[75%] xl:w-[60%] bg-white shadow-xl min-h-screen flex flex-col"
      >
        {/* Header */}
        <header className="p-6 md:p-10 border-b border-gray-50 bg-white sticky top-0 z-50 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="pprm logo"
                width={60}
                height={60}
                className="w-10 md:w-14 h-auto"
                priority
              />
            </div>
            <div className="h-10 w-[2px] bg-purple-200" />
            <h2 className="text-sm md:text-base font-bold text-gray-800 tracking-wide uppercase">
              Prince of Peace Redemption Ministries, Enugu
            </h2>
          </div>
        </header>

        <main className="flex-grow p-6 md:p-12">
          {/* Hero Section */}
          <section className="mb-12">
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="inline-block bg-purple-600 px-6 py-2 text-white shadow-lg shadow-purple-200 rounded-r-full mb-6"
            >
              <h1 className="text-sm font-bold tracking-widest uppercase">
                Prayer Request Wall
              </h1>
            </motion.div>

            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                How can we{" "}
                <span className="text-purple-600 italic font-serif">pray</span>{" "}
                for you today?
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                "Again, truly I tell you that if two of you on earth agree about
                anything they ask for, it will be done for them by my Father in
                heaven." — <span className="font-bold">Matthew 18:19</span>
              </p>
            </div>
          </section>

          {/* Featured Carousel with Decoration */}
          <section className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent z-10" />
            <Carousel autoplay loop />
          </section>

          {/* Form Section */}
          <section className="max-w-3xl mx-auto py-10">
            <div className="text-center mb-8">
              <span className="text-purple-500 font-bold text-xs uppercase tracking-[0.3em]">
                Intercession Form
              </span>
              <div className="h-1 w-12 bg-purple-500 mx-auto mt-2 rounded-full" />
            </div>

            <form action={formAction} className="space-y-6">
              <div className="relative group">
                <textarea
                  required
                  minLength={10}
                  maxLength={2000}
                  name="prayerRequest"
                  onChange={(e) => setCharCount(e.target.value.length)}
                  placeholder="Share your heart here..."
                  className="w-full p-6 text-gray-700 bg-gray-50 border-2 border-gray-100 rounded-2xl h-64 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-50 transition-all outline-none resize-none shadow-inner"
                ></textarea>

                {/* Character Counter */}
                <div className="absolute bottom-4 right-4 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                  {charCount} / 2000 characters
                </div>
              </div>

              {/* Feedback Messages */}
              <AnimatePresence>
                {state?.error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-xs font-bold text-center"
                  >
                    ⚠️ {state.error}
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="flex justify-center mt-4">
                {" "}
                {/* Center the button container */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isPending}
                  className="w-full md:w-auto md:px-12 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-purple-100 disabled:bg-gray-300 disabled:shadow-none transition-all flex items-center justify-center gap-3 text-sm tracking-wide"
                >
                  {isPending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    "Submit Petition"
                  )}
                </motion.button>
              </div>
            </form>
          </section>
        </main>
        <div className="m-3">
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}

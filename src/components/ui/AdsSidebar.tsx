"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function AdsSidebar() {
  return (
    <div className="flex flex-col gap-4 mt-6 lg:mt-0">
      <div className="flex items-center gap-2 mb-1 px-1">
        <span className="w-1 h-3 bg-mecha-accent rounded-full" />
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tài trợ & Đối tác</h3>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          href="https://quizken.vercel.app" 
          target="_blank" 
          className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 group shadow-xl transition-all duration-500 hover:border-mecha-accent/40 block"
        >
          <Image 
            src="/ads-quizken.png?v=4" 
            alt="Quizken Ads" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          <div className="absolute bottom-3 left-4 z-10 flex flex-col items-start">
            <span className="bg-mecha-accent text-mecha-dark text-[8px] font-black px-1.5 py-0.5 rounded tracking-tighter uppercase mb-1 inline-block">Sponsor</span>
            <p className="text-white font-bold text-sm drop-shadow-lg flex items-center gap-1">
              Quizken - Khám phá tri thức <ExternalLink className="w-3 h-3" />
            </p>
          </div>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link 
          href="https://connect-cg.vercel.app" 
          target="_blank" 
          className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 group shadow-xl transition-all duration-500 hover:border-emerald-500/40 block"
        >
          <Image 
            src="/ads-connect.png?v=4" 
            alt="Connect Ads" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          <div className="absolute bottom-3 left-4 z-10 flex flex-col items-start">
            <span className="bg-emerald-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded tracking-tighter uppercase mb-1 inline-block">Partner</span>
            <p className="text-white font-bold text-sm drop-shadow-lg flex items-center gap-1">
              Connect CG - Kết nối cơ hội <ExternalLink className="w-3 h-3" />
            </p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

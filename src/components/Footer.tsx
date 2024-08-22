"use client";
import {
  LucideInstagram,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";

import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="h-full py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container mx-auto  py-5 flex items-center justify-between gap-16 sm:flex-row sm:justify-between">
        
          {/* right */}
          <div className="text-center">
            ©️ 2024 Baitussalam Welfare Trust. All rights reserved
          </div>
          {/* left */}
          <ul className="flex justify-center gap-2.5">
            <li>
              <Link href="https://baitussalam.org">
                <Facebook />
              </Link>
            </li>
            <li>
              {" "}
              <Link href="https://baitussalam.org">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link href="https://baitussalam.org">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="https://baitussalam.org">
                <Youtube />
              </Link>
            </li>
          </ul>
        </div>
      
    </footer>
  );
};

export default Footer;

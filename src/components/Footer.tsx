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
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          {/* right */}
          <div className="text-center">
            ©️ 2024 Your Company, Inc. All rights reserved
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
      </div>
    </footer>
  );
};

export default Footer;

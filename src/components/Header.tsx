"use client";
import techpark_black from "../assets/images/teckpark_black.png";
import Image from "next/image";
import { AlertDialog } from "./ui/alert-dialog";
import {
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Header() {
  return (
    <div className="h-full">
      <div className="container mx-auto flex items-center justify-between py-6">
        <Image
          src={techpark_black}
          alt="tech park logo"
          height={104}
          width={104}
          draggable={false}
        />
        <h1 className="text-6xl font-extrabold tracking-tighter text-orange-500/90">
          Baitussalam Tech Park
        </h1>

        <div>
          <AlertDialog>
            <AlertDialogTrigger className="bg-orange-500 text-white hover:bg-orange-400/80 px-8 py-2 rounded-xl border-none">
              Apply
            </AlertDialogTrigger>

            <AlertDialogContent className="bg-gradient-to-br from-orange-300 via-orange-400 to-orange-200">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  New Admissions Are Currently Closed 
                </AlertDialogTitle>
                <AlertDialogDescription className="text-black">
                  New admissions into Baitussalam's prestigious PSDC program
                  are closed. Please follow our social media handles to get
                  notified once a new batch is open.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-2xl">
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}

export default Header;

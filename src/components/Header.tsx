"use client";
import techpark_black from "../assets/images/teckpark_black.png";
import Image from "next/image";
import { AlertDialog } from "./ui/alert-dialog";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Header() {
  return (
    <div className="">
      <div className="">
        <Image
          src={techpark_black}
          alt="tech park logo"
          height={104}
          width={104}
        />
        <h1 className="">Baitussalam Tech Park</h1>
        <div className="">
          <AlertDialog>
            <AlertDialogTrigger>Register</AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  New Admissions Are Currently Closed
                </AlertDialogTitle>
                <AlertDialogDescription>
                  New admissions into Baitussalam's prestigious PSDC program are
                  closed. Please follow our social media handles to get notified
                  once a new batch is open.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}

export default Header;

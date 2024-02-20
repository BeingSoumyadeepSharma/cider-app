"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import mainLogo from "public/Cider.svg";
import Link from "next/link";
import animationData from "public/Bubbles.json";
import Lottie from "lottie-react";

export default function Home() {
  return (
    <div>
      <div className="fixed w-screen h-screen flex flex-wrap items-center justify-center">
        <div className="flex flex-col items-center justify-stretch">
          <Image
            src={mainLogo}
            alt="main logo"
            className="w-3/5 h-3/5 object-contain inset-0 ml-10"
          />
          <h1>Brewing Up Brilliance Together</h1>
          <br />
          <h2>Let&apos;s Collaborate and Create</h2>
          <div className="grid grid-flow-col mt-5 space-x-8">
            <Button asChild>
              <Link href="/">Get Started</Link>
            </Button>
            <Button variant="outline" className="px-9" asChild>
              <Link href="/">Login</Link>
            </Button>
          </div>
        </div>
      </div>
      <Lottie
        animationData={animationData}
        className="fixed object-cover -z-20 inset-0"
      ></Lottie>
    </div>
  );
}

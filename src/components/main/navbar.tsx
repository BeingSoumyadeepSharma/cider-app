"use client";

import Image from "next/image";
import logoImg from "public/Cider_Nav.svg";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export function useShowRegister(initialValue: boolean): [boolean, (newValue: boolean) => void] {
  const [showRegister, setshowRegister] = useState(initialValue);

  const toggleRegister = (newValue: boolean): void => {
    setshowRegister(newValue);
  };

  return [showRegister, toggleRegister];
}

export function useShowLogin(initialValue: boolean): [boolean, (newValue: boolean) => void] {
  const [showLogin, setshowLogin] = useState(initialValue);

  const toggleLogin = (newValue: boolean): void => {
    setshowLogin(newValue);
  };

  return [showLogin, toggleLogin];
}

export default function Navbar() {
  const [showLogin, setshowLogin] = useShowLogin(true);
  const [showRegister, setshowRegister] = useShowRegister(true);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 1,
          opacity: 0,
          y: -5,
        },
        visible: {
          scale: 1,
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <div className="w-full fixed text-foreground z-10 overflow-x-hidden">
        <nav className="flex flex-row items-center justify-between mx-2 px-2">
          <Link
            href="/"
            onClick={() => {
              setshowRegister(true);
              setshowLogin(true);
            }}
            className="text-2xl font-semibold"
          >
            <Image
              src={logoImg}
              alt="logo"
              width={100}
              height={50}
              className="float-left"
            />
          </Link>
          <div className="grid grid-flow-col items-center space-x-8 text-xl mx-0">
            <div id="nav-open" className="space-x-8">
              {showRegister && (
                <Button variant="ghost" asChild>
                  <Link
                    href="/register"
                    onClick={() => setshowRegister(false)}
                    className="text-sm"
                  >
                    Sign Up
                  </Link>
                </Button>
              )}
              {showLogin && (
                <Button asChild>
                  <Link
                    href="/"
                    onClick={() => setshowLogin(false)}
                    className="px-8 font-normal"
                  >
                    Login
                  </Link>
                </Button>
              )}
            </div>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </motion.div>
  );
}

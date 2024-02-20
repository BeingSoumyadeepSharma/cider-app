"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import animationData from "public/collaborate.json";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Lottie from "lottie-react";
import Link from "next/link";
import { useShowLogin, useShowRegister } from "@/components/main/navbar";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(5)
    .max(50),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});

export function SignupForm() {
  const [showLogin, setshowLogin] = useShowLogin(true);
  const [showRegister, setshowRegister] = useShowRegister(true);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="fixed w-screen h-screen flex flex-row items-center">
      <div className="container px-10 inline-grid grid-cols-2 items-center justify-center">
        <Lottie animationData={animationData} className="w-full h-full" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-4/6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@abc.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="pass@123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row space-x-6">
              <Button type="submit">Submit</Button>
              <Button type="reset" variant="outline" className="px-5">Reset</Button>
            </div>
            <small className="flex flex-row space-y-8 items-center">Already have an account?&nbsp;<Button variant="link" className="px-2" asChild><Link href="/">Sign in here</Link></Button></small>
          </form>
        </Form>
      </div>
    </div>
  );
}

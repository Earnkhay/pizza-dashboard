"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { PizzaIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Card className="mx-auto border-2 border-border/50 shadow-xl animate-fadeIn">
          <CardHeader className="space-y-2 text-center">
            <div className="mx-auto bg-primary/5 dark:bg-primary/10 p-3 rounded-full w-fit">
              <PizzaIcon className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">
              Pizza Dashboard
            </CardTitle>
            <CardDescription>
              Sign in with your Google account to manage pizza orders
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              className="w-full flex items-center justify-center gap-2 transition-all duration-300 hover:translate-y-[-2px]"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M12.545,12.151L12.545,12.151c0,1.054,0.855,1.909,1.909,1.909h3.536c-0.197,1.043-0.757,1.961-1.578,2.602c-0.821,0.641-1.831,0.99-2.875,0.99c-1.364,0-2.675-0.543-3.642-1.51s-1.51-2.277-1.51-3.642s0.543-2.675,1.51-3.642s2.277-1.51,3.642-1.51c1.38,0,2.569,0.589,3.461,1.689l1.312-1.312c-1.228-1.371-2.902-2.134-4.772-2.134c-1.885,0-3.694,0.749-5.025,2.081c-1.332,1.332-2.081,3.14-2.081,5.025s0.749,3.694,2.081,5.025c1.332,1.332,3.14,2.081,5.025,2.081c1.714,0,3.376-0.627,4.665-1.766c1.29-1.139,2.132-2.692,2.366-4.368l0.018-0.132h-7.043C13.401,12.151,12.545,12.151,12.545,12.151z"
                ></path>
                <path
                  fill="currentColor"
                  d="M21.545,10.151h-0.909v-0.909h-1.812v0.909h-0.909v1.909h0.909v0.909h1.812v-0.909h0.909V10.151z"
                ></path>
              </svg>
              Sign in with Google
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-8">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}

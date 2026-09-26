"use client";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <Image
      src="/images/logo.svg"
      alt={`${APP_NAME} logo`}
      width={48}
      height={48}
      priority
    />
    <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold mb-4">Not Found</h1>
      <p className="text-destructive">Requested page was not found</p>
      <Button className="mt-4 ml-2" variant="outline">
        <Link href="/" className="flex gap-1">
          Go to Home
        </Link>
      </Button>
    </div>
  </div>
);
export default NotFoundPage;

import Image from "next/image";
import React from "react";
import gundam from "./gundam.jpg";
import { ABOUT_ME } from "@/lib/config";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="space-y-8 mt-4 md:mt-8">
      <section className="flex flex-col gap-4 items-center px-4">
        <Image
          src="https://avatars.githubusercontent.com/u/20682437?v=4"
          alt="logo"
          className="object-cover shadow-md"
          width={128}
          height={128}
          style={{ width: 128, height: 128 }}
        />

        <p className="text-center text-base md:text-lg">{ABOUT_ME}</p>
      </section>

      <div className="mt-4 text-sm flex gap-8 p-4 justify-center">
        <Link
          className="hover:underline break-all"
          href="https://x.com/Ted2xmen"
          target="_blank"
          rel="noopener noreferrer">
          X
        </Link>
        <Link
          className="hover:underline break-all"
          href="https://www.linkedin.com/in/tugrulerdemdogru/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </Link>
        <Link
          className="hover:underline break-all"
          href="https://github.com/Ted2xmen"
          target="_blank"
          rel="noopener noreferrer">
          Github
        </Link>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
        <div className="flex justify-center">
          <Image
            src={gundam.src}
            alt="gundam"
            className="object-cover shadow-lg"
            width={420}
            height={420}
            style={{ width: "100%", maxWidth: 420, height: "auto" }}
          />
        </div>

        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg text-center md:text-left">
            My Favorite Tech Stack
          </p>

          <div className="flex mt-2 flex-wrap gap-2 justify-center md:justify-start">
            <span className="px-2 py-1 bg-muted rounded text-sm">Next.js</span>
            <span className="px-2 py-1 bg-muted rounded text-sm">
              Drizzle ORM
            </span>
            <span className="px-2 py-1 bg-muted rounded text-sm">
              Better-Auth
            </span>
            <span className="px-2 py-1 bg-muted rounded text-sm">
              React Hook Form
            </span>
            <span className="px-2 py-1 bg-muted rounded text-sm">
              React Query
            </span>
            <span className="px-2 py-1 bg-muted rounded text-sm">
              Shadcn UI
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

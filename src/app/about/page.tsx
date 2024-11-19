import { ABOUT_LINKS } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-4 mt-4 justify-center">
        {ABOUT_LINKS.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary font-thin font-sans">
              {item.name}
            </Link>
          );
        })}
      </div>
      <Image
        src="/bg-image.jpg"
        alt="a-dog"
        className="rounded-lg"
        width={1200}
        height={1200}
      />
    </section>
  );
};

export default AboutPage;

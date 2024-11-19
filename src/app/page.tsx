import { SHORT_BIOGRAPHY, SOCIAL_LINKS } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-center mt-4">
        <Image
          src="https://avatars.githubusercontent.com/u/20682437?v=4"
          alt="hero"
          className="rounded-lg"
          width={140}
          height={140}
        />
      </div>
      <div className="md:text-lg font-serif text-center max-w-3xl mx-auto">
        {SHORT_BIOGRAPHY}
      </div>

      <div className="flex items-center gap-6 mt-8 justify-center">
        {SOCIAL_LINKS.map((item) => {
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
    </section>
  );
}

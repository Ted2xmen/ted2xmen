import Hero from "./hero";

export default async function Home() {
  return (
    <section className="flex flex-col gap-8">
      <Hero />
    </section>
  );
}

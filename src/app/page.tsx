// import Image from "next/image";
import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ui/ThemeToggle";
export default function Home() {
  return (
    <main className="relative bg-white-default dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
      <div>
        <ModeToggle />
      </div>
    </main>
  );
}

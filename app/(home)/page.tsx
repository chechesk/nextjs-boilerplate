import Footer from "@/Components/Footer/footer";
import PokemonList from "@/Components/List/List";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <Image
        src='/logo.webp'
        alt="Logo Pokemon"
        width={226}
        height={226} />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <PokemonList />
      </main>
      <Footer />
    </div>
  );
}
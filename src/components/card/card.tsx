import Image from "next/image";
import Link from "next/link";

const Card = ({ pokemon }: { pokemon: any }) => {
  return (
    <div className="py-4 grid grid-rows-1 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-3 md:grid-cols-3 gap-4">
      {pokemon.map((poke: any, index: any) => (
        <Link href={`/pokemon?id=${index + 1}`} key={index + 1}>
          <div className="flex justify-center items-center flex-col bg-[#1C2738] px-3 py-1.5 border-[1px] border-slate-600 rounded-md cursor-pointer group">
            <Image
              src={poke.image}
              width="200px"
              height="200px"
              alt={poke.name}
              loading="lazy"
            />
            <h1 className="text-2xl font-bold group-hover:text-blue-500 duration-300 transition-all">
              {poke.name}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;

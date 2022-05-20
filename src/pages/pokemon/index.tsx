import { detailPokemon } from "../../utils/types";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/layout";

export const getServerSideProps = async ({ query }: detailPokemon) => {
  const id = query.id;
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const results = await response.json();

    const nomor = ("00" + id).slice(-3);
    results.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${nomor}.png`;

    return {
      props: { results },
    };
  } catch (err) {
    console.log(err);
  }
};

const Pokemon = ({ results }: detailPokemon) => {
  return (
    <Layout title={results.name}>
      <h1 className="text-4xl font-bold mb-2">{results.name}</h1>
      <Image
        width="250px"
        height="250px"
        src={results.image}
        alt={results.name}
        loading="lazy"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="mt-2 flex flex-col bg-[#1C2738] px-3 py-1.5 border-[1px] border-slate-600 rounded-md">
          <h1 className="text-2xl font-bold">Statistics</h1>
          <div className="flex mt-1 items-center">
            <span className="font-semibold">Skills: &nbsp;</span>
            {results.abilities.map((ability: any, index: number) => (
              <div className="bg-rose-600 mx-1" key={index + 1}>
                <p className="px-1 font-semibold">
                  {ability.ability.name}&nbsp;
                </p>
              </div>
            ))}
          </div>

          <div className="flex mt-1 items-center">
            <span className="font-semibold">Type: &nbsp;</span>
            {results.types.map((type: any, index: number) => (
              <div className="bg-cyan-600 mx-1" key={index + 1}>
                <p className="px-1 font-semibold">{type.type.name} &nbsp;</p>
              </div>
            ))}
          </div>

          <div className="flex mt-1">
            <span className="font-semibold">Weight: &nbsp;</span>
            <p className="font-semibold">{results.weight}</p>
          </div>

          <div className="flex mt-1">
            <span className="font-semibold">Height: &nbsp;</span>
            <p className="font-semibold">{results.height}</p>
          </div>
        </div>
        <Link href="/">
          <button className="mt-4 px-2.5 py-1.5 font-semibold rounded-md bg-blue-600 hover:bg-rose-600 duration-300 transition-all">
            Back to Home
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Pokemon;

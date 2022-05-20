import { homePokemon } from "../utils/types";
import Layout from "../components/layout/layout";
import Card from "../components/card/card";

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const { results } = await response.json();

    const pokemon = results.map((result: any, index: any) => {
      // buat nomor imagenya, karena dimap
      const id = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

      return {
        ...result,
        image,
      };
    });

    return {
      props: { pokemon },
    };
  } catch (err) {
    console.log(err);
  }
};

const Home = ({ pokemon }: homePokemon) => {
  return (
    <Layout title="Pokedex">
      <h1 className="text-4xl font-bold px-3 py-1.5">Pokedex</h1>
      <Card pokemon={pokemon} />
    </Layout>
  );
};

export default Home;

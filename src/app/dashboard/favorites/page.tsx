import { PokemonGrid } from "@/pokemons";

export const metadata = {
 title: 'Favoritos',
 description: '151 Pokemons',
};

export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-4">Pokemons fav <small className="text-blue-500">Global State</small></span>
            <PokemonGrid pokemons={[]} />
        </div>
    );
}
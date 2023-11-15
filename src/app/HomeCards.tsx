import Image from "next/image";
import Link from "next/link";

export default async function HomeCards() {
  const listReq = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  const listRes = await listReq.json();
  const list = [];
  for (const p of listRes.results) {
    const pokemonInfoReq = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${p.name}`
    );
    const item = await pokemonInfoReq.json();
    if (item?.sprites?.other?.["official-artwork"]?.front_default) {
      list.push({
        name: p.name,
        image: item.sprites.other["official-artwork"].front_default,
      });
    }
  }

  return (
    <div className="flex flex-wrap gap-1">
      {list.map((pokemon: any) => (
        <div key={pokemon.name}>
          <Link
            href={`/pokemon/${pokemon.name}`}
            className="flex flex-col rounded-lg border-2 border-white"
          >
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              className="w-full"
              width={475}
              height={475}
            />
            <div className="text-2xl font-semibold mt-5 p-5">
              {pokemon.name}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

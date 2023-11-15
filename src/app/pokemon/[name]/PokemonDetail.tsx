import Image from "next/image";

export default async function PokemonDetail({ name }: { name: string }) {
  const pokemonInfoReq = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  const item = await pokemonInfoReq.json();

  return (
    <div className="flex">
      <div className="w-1/3 p-3">
        <Image
          src={item.sprites.other["official-artwork"].front_default}
          alt={name}
          width={475}
          height={475}
        />
      </div>
      <div className="p-5">
        <div className="text-2xl font-semibold uppercase">{name}</div>
        <div className="text-lg italic mt-2">
          {item.types.map((t: any) => t.type.name).join(", ")}
        </div>
        <div className="mt-2">
          {item.stats.map((s: any) => (
            <div key={s.stat.name} className="grid grid-cols-2 gap-2">
              <div className="font-semibold">{s.stat.name}</div>
              <div>{s.base_stat}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

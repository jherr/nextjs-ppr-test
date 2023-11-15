import Link from "next/link";

export default async function Menu() {
  const req = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"
  );
  const res = await req.json();

  return (
    <div>
      <div className="mb-2 font-bold">
        <Link href="/">Home</Link>
      </div>
      {res.results.map((pokemon: any) => (
        <div key={pokemon.name}>
          <Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        </div>
      ))}
    </div>
  );
}

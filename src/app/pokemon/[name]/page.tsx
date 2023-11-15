import { Suspense } from "react";
import PokemonDetail from "./PokemonDetail";
export default function PokemonPage({ params }: { params: { name: string } }) {
  return (
    <Suspense>
      <PokemonDetail name={params.name} />
    </Suspense>
  );
}

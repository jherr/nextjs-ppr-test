import Image from "next/image";
import { Suspense } from "react";

import HomeCards from "./HomeCards";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <HomeCards />
    </Suspense>
  );
}

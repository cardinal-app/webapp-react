"use server";
// "use client";

import Link from "next/link";

export default function Home() {
  return (
      <main>
          <h1>Cardinal</h1>
          <br/>
          <Link href="/fit-track">Fit Track</Link>
      </main>
  );
}

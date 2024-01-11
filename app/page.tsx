"use client";

import { isLoggedIn } from "@/core/helpers/authentication";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
    if (!isLoggedIn()) redirect('/login');

    return (
      <main>
          <h1>Cardinal</h1>
          <br/>
          <Link href="/fit-track">Fit Track</Link>
      </main>
  );
}

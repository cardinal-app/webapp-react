"use client";

import { authUtil } from "@/core/utils/auth.util";
import { GetInitialProps } from "@/core/interfaces/page.interface";
import Link from "next/link";
import { redirect } from "next/navigation";

interface GetInitialReturnProps {
    authToken: string | undefined;
}

export default function Home(ctx: { pageProps: GetInitialReturnProps }) {
    return (
      <main>
          <h1>Cardinal</h1>
          <h2>Tag line...</h2>
          <br/>
          <Link href="/fit-track">Fit Track</Link>
      </main>
  );
}

Home.getInitialProps = async (ctx: GetInitialProps): Promise<GetInitialReturnProps> => {
    const authToken = authUtil.getAuthToken(ctx);

    if (!authToken) {
        redirect('/login');
    }

    return { authToken };
};

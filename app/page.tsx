"use client";

import { authUtil } from "@/core/utils/auth.util";
import { GetInitialProps } from "@/core/interfaces/page.interface";
import { redirect } from "next/navigation";
import Home from "./home/page";

// export const metadata = {
//     title: "Cardinal",
//     description: "/ˈkɑːdɪnəl/ Of the greatest importance; fundamental."
// }

interface GetInitialReturnProps {
    authToken: string | undefined;
}

export default function App(ctx: { pageProps: GetInitialReturnProps }) {
    redirect('/home');
}

App.getInitialProps = async (ctx: GetInitialProps): Promise<GetInitialReturnProps> => {
    const authToken = authUtil.getAuthToken(ctx);

    if (!authToken) {
        redirect('/login');
    }

    return { authToken };
};

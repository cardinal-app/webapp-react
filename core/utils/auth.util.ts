import { NextPageContext } from "next";
import nookies, { parseCookies } from "nookies";


const setAuthToken = (username: string, password: string, ctx?: NextPageContext) => {
    nookies.set(ctx, "token", `${username}:${password}`, { 
        maxAge: 30 * 24 * 60 * 60 }
    );
};

const getAuthToken = (ctx?: NextPageContext): string | undefined => {
    const authToken = nookies.get(ctx)["token"];
    console.log(authToken);
    
    return authToken;
};

export const authUtil = {
    setAuthToken,
    getAuthToken
};

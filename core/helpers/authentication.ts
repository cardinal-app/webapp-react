import { parseCookies, setCookie } from "nookies";


export function isLoggedIn(): boolean {
    const cookies = parseCookies(null);
    const token = cookies['token'];

    console.log(cookies);
    console.log(token); // Question :: why null?

    return !!cookies;
    // return !!token;
}

export function login(username: string, password: string): void {
    setCookie(null, "token", `${username}:${password}`, {
        maxAge: 30 * 24 * 60 * 60,
    });
}

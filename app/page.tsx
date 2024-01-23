"use client";

import { authUtil } from "@/core/utils/auth.util";
import { redirect } from "next/navigation";
import Home from "./home/page";

// export const metadata = {
//     title: "Cardinal",
//     description: "/ˈkɑːdɪnəl/ Of the greatest importance; fundamental."
// }

export default function App() {
    redirect('/home');
}

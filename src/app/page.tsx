import { redirect } from "next/navigation";

//** Configs */
import { DEFAULT_PAGE } from "@/configs/router/page";

export default function Home() {
    redirect(DEFAULT_PAGE);
}

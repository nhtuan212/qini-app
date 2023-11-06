import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

//** Router */
export const useRouterCustomHook = () => {
    const router = useRouter();
    const pathName = usePathname();

    // const pageName = pathName && pathName.split("/").pop();

    return { ...router, pathName };
};

//** Viewport */
export const useViewport = () => {
    const [width, setWidth] = useState<number>(
        typeof window !== "undefined" ? window.innerWidth : 1920,
    );

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return {
        width,
    };
};

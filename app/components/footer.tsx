"use client";

import { useEffect, useState } from "react";

const locToFlag = (loc: string) =>
    [...loc.toUpperCase()]
        .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
        .join("");

const Footer = () => {
    const [colo, setColo] = useState<string | null>(null);
    const [flag, setFlag] = useState<string>("");

    useEffect(() => {
        const url =
            window.location.hostname === "localhost"
                ? "https://imgary.li/cdn-cgi/trace"
                : "/cdn-cgi/trace";

        fetch(url)
            .then((r) => r.text())
            .then((text) => {
                const get = (key: string) =>
                    text.match(new RegExp(`^${key}=(.*)$`, "m"))?.[1] ?? "";
                const coloVal = get("colo");
                const locVal = get("loc");
                if (coloVal) {
                    setColo(coloVal);
                    setFlag(locVal ? locToFlag(locVal) : "");
                }
            })
            .catch(() => { });
    }, []);

    if (!colo) return null;

    return (
        <p className="text-center text-xs text-slate-400 dark:text-slate-600 pb-4 -mt-4">
            {flag && <span className="mr-1">{flag}</span>}
            serving you from {colo}
        </p>
    );
};

export default Footer;

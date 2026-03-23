"use client";

import { useEffect, useState } from "react";
import InitialLoader from "./InitialLoader";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaded = sessionStorage.getItem("first-load");

    if (loaded) {
      setLoading(false);
    } else {
      sessionStorage.setItem("first-load", "true");
      const timer = setTimeout(() => setLoading(false), 3400);
      return () => clearTimeout(timer);
    }
  }, []);

  return loading ? <InitialLoader /> : <>{children}</>;
}

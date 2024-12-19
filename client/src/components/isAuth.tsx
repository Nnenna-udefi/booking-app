"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

export const IsAuth: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuth") === "true";
    setIsAuthenticated(authStatus);

    if (!authStatus) {
      redirect("/admin/adminpass");
    }
  }, []);

  // While determining authentication status, show nothing or a loading spinner
  if (isAuthenticated === null) {
    return null; // You can return a loading spinner if needed
  }

  // If not authenticated, return nothing (or a fallback)
  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "./ui/loadingSpinner";

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
    return (
      <div className="flex items-center h-screen justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  // If not authenticated, return nothing (or a fallback)
  if (!isAuthenticated) {
    redirect("/");
  }

  return <>{children}</>;
};

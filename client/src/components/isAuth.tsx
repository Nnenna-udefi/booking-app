"use client";

import { isAuthenticated } from "@/utils/auth";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export const IsAuth: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    if (!isAuthenticated) {
      redirect("/admin/adminpass");
    }
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

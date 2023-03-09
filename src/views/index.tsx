import React from "react";
import { AppLayout } from "../layout";

export const View: React.FC = () => {
  return (
    <AppLayout defaultSelectedKeys="01">
      <h1 className="text-center grid place-items-center h-full text-black dark:text-white">
        Welcome to Xpress Payment Page Template
      </h1>
    </AppLayout>
  );
};

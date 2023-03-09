import { ConfigProvider } from "antd";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./store/hooks";
import { getThemeConfig } from "./theme/theme-config";
import { View } from "./views"; 

export const App = () => {
  const state = useAppSelector((state: any): string => {
    return state.theme
  });

  return (
    <ConfigProvider theme={getThemeConfig(state)}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

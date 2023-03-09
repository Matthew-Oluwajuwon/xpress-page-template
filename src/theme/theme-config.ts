import { ThemeConfig } from "antd";

export const getThemeConfig = (state: string): ThemeConfig | undefined => {  
  return {
    token: {
      colorPrimary: "006e01",
    },
    components: {
      Table: {
        colorBgContainer: state === "light" ? "#f5f7fb" : "#111111",
        colorText: state === "light" ? "#000000" : "#ffffff",
        colorTextHeading: state === "light" ? "#ffffff" : "#ffffff",
        colorFillAlter: state === "light" ? "#006e01" : "#222222",
        colorBorderSecondary: state === "light" ? "#006e01" : "#000000",
        colorBgTextHover:  state === "light" ? "#000000" : "#ffffff",
        colorIcon: state === "light" ? "#ffffff" : "#ffffff",
      },
      Modal: {
        colorBgElevated: state === "light" ? "#ffffff" : "#222222",
        colorText: state === "light" ? "#000000" : "#ffffff",
        colorTextHeading: state === "light" ? "#000000" : "#ffffff",
        colorIcon: "white",
        colorLink: "white",
      },
      Popover: {
        colorBgElevated: state === "light" ? "#ffffff" : "#222222",
      },
      Upload: {
        colorText: state === "light" ? "#000000" : "#ffffff",
      },
      Pagination: {
        colorText: state === "light" ? "#000000" : "#ffffff",
      },
      Progress: {
        colorText: state === "light" ? "#000000" : "#ffffff",
      },
      Button: {
        colorPrimary: state === "light" ? "#006e01" : "#111111",
        colorPrimaryActive: state === "light" ? "#006e01" : "#111111",
        colorText: state === "light" ? "#006e01" : "#ffffff",
        colorBgContainer:  "#006e01",
      },
      Form: {
        colorTextHeading: state === "light" ? "#000000" : "#ffffff",
      },
      Card: {
        colorBgContainer: state === "light" ? "#ffffff" : "#111111",
        colorBorderSecondary: state === "light" ? "#ffffff" : "#111111",
      },
      Select: {
        colorBgContainer: state === "light" ? "#ffffff" : "#222222",
        colorText: state === "light" ? "#000000" : "#ffffff",
        colorBgElevated: state === "light" ? "#ffffff" : "#222222",
      },
      Input: {
        controlOutline: "#006e01",
      },
      Typography: {
        colorText: state === "light" ? "#000000" : "#ffffff",
      },
      FloatButton: {
        colorBgElevated: state === "light" ? "#111111" : "#ffffff",
      }
    },
  };
};

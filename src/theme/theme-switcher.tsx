import { Tooltip } from "antd";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setTheme } from "../store";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const [themes, setThemes] = useState("");
  const SetDark = (text: string) => {
    setThemes(text);
    localStorage.setItem("theme", text);
  };
  const element = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const handleSytemTheme = useCallback(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && systemTheme.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [element.classList, systemTheme.matches]);

  useLayoutEffect(() => {
    handleSytemTheme();
  }, [handleSytemTheme]);

  useEffect(() => {
    switch (themes) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        dispatch(setTheme(themes));
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        dispatch(setTheme(themes));
        break;
      default:
        element.classList.remove("dark");
        localStorage.setItem("theme", "system");
        dispatch(setTheme(themes));
        break;
    }
  }, [themes, dispatch, element.classList, handleSytemTheme]);

  systemTheme.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <Tooltip title="Toggle between dark and light mode theme" placement="left">
      <div className="cursor-pointer">
        {themes === "dark" ? (
          <BsMoonStarsFill
            onClick={() => SetDark("light")}
            className="text-xl text-white"
          />
        ) : (
          <BsSun
            onClick={() => SetDark("dark")}
            className="text-xl text-black"
          />
        )}
      </div>
    </Tooltip>
  );
};

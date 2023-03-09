import { Menu } from "antd";
import React, { useLayoutEffect } from "react";
import { PageProps } from "../model/application/page-props";
import { ThemeSwitcher } from "../theme/theme-switcher";
import { MenuItems } from "./menu-items";

export const AppLayout: React.FC<PageProps.LayoutProps> = (props) => {
  useLayoutEffect(() => {
    document.title = props.tabName ? props.tabName : "Tab Name";
  }, [props.tabName]);

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-[13rem_1fr]">
      <nav className="h-full shadow-lg px-2 relative hidden lg:block bg-white dark:bg-[#111111]">
        <div className={`w-full h-[3.5rem] bg-[#e0dfdf] dark:bg-[#060606] my-2`}>
          {/* PAGE LOGO */}
        </div>
        <Menu
            className="text-black bg-white dark:bg-[#111111] dark:text-white py-5"
            mode="inline"
            theme="light"
            items={MenuItems}
            defaultOpenKeys={["1", "2"]}
            defaultSelectedKeys={props.defaultSelectedKeys as any}
          />
      </nav>
      <main className="h-full  grid grid-rows-[4rem_1fr]">
        <header className="shadow-md flex items-center justify-between px-3 bg-white dark:bg-[#111111]">
          <h1 className="font-bold font-[gelionBold] text-xl text-black dark:text-white">
            {props.pageTitle ? props.pageTitle : "Page Title"}
          </h1>
          <ThemeSwitcher />
        </header>
        <section className="bg-white dark:bg-[#000000] -z-10 px-5 py-5">
            {props.children}
        </section>
      </main>
    </div>
  );
};

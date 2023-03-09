import { NavLink } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];
  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

 export const MenuItems: MenuItem[] = [
    getItem(<div className="font-bold">Navigation One</div>, "1", null, [
      getItem(
        <NavLink to={"#"}>Option One</NavLink>,
        "01",
        <AiFillAppstore />
      ),
    ]),
    getItem(
      <div className="font-bold">Navigation Two</div>,
      "2",
      null,
      [
        getItem(
          <NavLink to={"#"}>Option One</NavLink>,
          "02",
          <AiFillAppstore />
        ),
        getItem(
          <NavLink to={"#"}>Option Two</NavLink>,
          "04",
          <AiFillAppstore />
        ),
        getItem(
          <NavLink to={"#"}>Option Three</NavLink>,
          "03",
          <AiFillAppstore />
        ),
      ]
    ),
  ];
import type { FC } from "react";
import type { MenuOption } from "../../../paths/MenuOptions";
import styles from "./NavbarItem.module.css";
import clsx from "clsx";

interface NavbarItemProps {
  menu: MenuOption;
  index: number;
}

const NavbarItem: FC<NavbarItemProps> = ({ menu, index }) => {
  const isActive = location.pathname === menu.link;
  return (
    <a
      key={index}
      href={menu.link}
      className={clsx(styles.navbarItem, { [styles.active]: isActive })}
    >
      {menu.title}
    </a>
  );
};

export default NavbarItem;

import type { FC } from "react";
import styles from "./NavbarItem.module.css";
import clsx from "clsx";
import type { MenuOption } from "../../../../paths/MenuOptions";

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

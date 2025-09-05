import type { FC } from "react";
import styles from "./NavieduInfo.module.css";
import type { Service } from "../../../data/navieduServices";

interface NavieduInfoProps {
  service: Service;
}

const NavieduInfo: FC<NavieduInfoProps> = ({ service }) => {
  return (
    <div className={styles.footerAbout}>
      <h1 className={styles.footerTitle}>{service.topic}</h1>
      <ul className={styles.footerLinks}>
        {service.features.map((feature, index) => (
          <li key={`${feature.title}${index}`}>
            {location.pathname === feature.href ? (
              <a href={feature.href} className={styles.active}>
                {feature.title}
              </a>
            ) : (
              <a href={feature.href}>{feature.title}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavieduInfo;

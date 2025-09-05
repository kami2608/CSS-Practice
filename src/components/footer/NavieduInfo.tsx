import type { FC } from "react";
import { navieduServices } from "../../data/navieduServices";
import styles from "./Footer.module.css";

const NavieduInfo: FC = () => {
  return (
    <>
      {navieduServices.map((service, index) => (
        <div key={index} className={styles.footerAbout}>
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
      ))}
    </>
  );
};

export default NavieduInfo;

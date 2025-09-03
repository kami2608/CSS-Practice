import { useState, type FC } from "react";
import styles from "./Header.module.css";
import Button from "../common/button/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="src\assets\Logo.png" />
      </div>
      <div className={styles.headerMenu}>
        <a>Chương trình học</a>
        <a>Blog</a>
        <a>Thư viện</a>
        <a>Bảng xếp hạng</a>
        <a>Trợ giúp</a>
      </div>
      <div className={styles.headerBtn}>
        <Button>Đăng ký</Button>
        <Button>Đăng Nhập</Button>
      </div>
      {!isMenuOpen && (
        <div className={styles.menuBtn}>
          <Button onClick={() => setIsMenuOpen(true)}>
            <RxHamburgerMenu style={{ fontSize: "50px" }} />
          </Button>
        </div>
      )}
      {isMenuOpen && (
        <div className={styles.menuBtn}>
          <Button onClick={() => setIsMenuOpen(false)}>
            <IoClose style={{ fontSize: "50px" }} />
          </Button>
        </div>
      )}
      {isMenuOpen && (
        <div className={styles.menuBox}>
          <a>Chương trình học</a>
          <a>Blog</a>
          <a>Thư viện</a>
          <a>Bảng xếp hạng</a>
          <a>Trợ giúp</a>
          <div className={styles.headerBtnBox}>
            <Button>Đăng ký</Button>
            <Button>Đăng Nhập</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

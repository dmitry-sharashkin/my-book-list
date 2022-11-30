import React from "react";

import { NavLink } from "react-router-dom";
// TODO: replace by alias
import logo from "../../../../assets/icons/book-logo.svg";

import styles from "./styles.module.scss";

export default function BaseHeader() {
  return (
    <>
      <header className={styles.container}>
        <NavLink to={"/"} className={styles.logo}>
          <img src={logo} alt="logo" className={styles.logoIcon} />
          <span className={styles.logoTitle}>My book list </span>
        </NavLink>
        <ul>
          <li>
            <NavLink to={"/"}>Home </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/auth"}>Auth </NavLink>
          </li>
          <li>
            <NavLink to={"/feed"}>Feed </NavLink>
          </li>
          <li>
            <NavLink to={"/404"}>404 </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

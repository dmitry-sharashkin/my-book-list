import React from "react";

import { Outlet } from "react-router";

import BaseHeader from "./Header/BaseHeader";
import styles from "./styles.module.scss";

export default function BaseLayout() {
  return (
    <>
      <BaseHeader />
      <section className={styles.container}>
        <Outlet />
      </section>
    </>
  );
}

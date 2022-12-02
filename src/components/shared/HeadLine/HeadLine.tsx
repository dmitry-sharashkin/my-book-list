import React from "react";

import styles from "./styles.module.scss";

export interface IHeadLine {
  children: React.ReactNode;
}

export default function HeadLine(props: IHeadLine) {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
}

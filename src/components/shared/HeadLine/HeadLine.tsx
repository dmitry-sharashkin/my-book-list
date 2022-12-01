import React from "react";

import styles from "./styles.module.scss";

type headLineType = "default" | "link" | "control";

interface IHeadLine {
  type?: headLineType;
  heading: string;
  controls?: any;
  link?: string;
}

export default function HeadLine(props: IHeadLine) {
  const { type = "default", heading, controls, link } = props;

  return <div className={styles.container}>{heading}</div>;
}

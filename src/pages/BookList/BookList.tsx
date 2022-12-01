import React from "react";

import HeadLine from "@components/shared/HeadLine/HeadLine";
import styles from "./styles.module.scss";
import { ReadStatusEnum } from "shared/types/book.interface";

export default function BookList() {
  return (
    <div className={styles.container}>
      <HeadLine heading={ReadStatusEnum.planned} type="default" />

      <HeadLine heading={ReadStatusEnum.read} type="default" />

      <HeadLine heading={ReadStatusEnum.reread} type="default" />

      <HeadLine heading={ReadStatusEnum.alreadyRead} type="default" />

      <HeadLine heading={ReadStatusEnum.abandoned} type="default" />
    </div>
  );
}

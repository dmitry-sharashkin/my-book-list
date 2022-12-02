import React from "react";

import HeadLine from "@components/shared/HeadLine/HeadLine";
import styles from "./styles.module.scss";
import { IBook, ReadStatusEnum } from "shared/types/book.interface";
import Table from "@components/shared/Table/Table";

const bookDataRead: IBook[] = [
  {
    title: "Идеальный программист",
    image:
      "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_200/11961798-robert-s-martin-idealnyy-programmist-kak-stat-professionalom-razrabotki-po.jpg_330.jpg",
    type: "книга",
    status: ReadStatusEnum.read,
    myRating: 10,
    chaptersRead: 50,
    chapters: 100,
  },
];

export default function BookList() {
  return (
    <div className={styles.container}>
      {/* <HeadLine>{"Добавить в список"}</HeadLine> */}
      <HeadLine>{ReadStatusEnum.planned}</HeadLine>
      <Table data={bookDataRead} />
      <HeadLine>{ReadStatusEnum.read}</HeadLine>
      <HeadLine>{ReadStatusEnum.reread}</HeadLine>
      <HeadLine>{ReadStatusEnum.alreadyRead}</HeadLine>
      <HeadLine>{ReadStatusEnum.abandoned}</HeadLine>
    </div>
  );
}

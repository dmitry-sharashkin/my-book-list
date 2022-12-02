import React from "react";

import styles from "./styles.module.scss";

import { IBook } from "@shared/types/book.interface";

interface ITable {
  data: IBook[];
}

export default function Table(props: ITable) {
  const { data } = props;
  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr>
          <th className={styles.index}>#</th>
          <th>Название</th>
          <th className={styles.sizeLimited}>Оценка</th>
          <th className={styles.sizeLimited}>Главы</th>
          <th className={styles.sizeLimited}>Тип</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.title}>
            <td className={styles.index}>
              <span>{index + 1}</span>
            </td>
            <td>
              <span>
                <span>{item.title}</span>
              </span>
            </td>
            <td className={styles.sizeLimited}>
              <span>{item.myRating}</span>
            </td>
            <td className={styles.sizeLimited}>
              <span>
                {item.chaptersRead}/{item.chapters}
              </span>
            </td>
            <td className={styles.sizeLimited}>
              <span>{item.type}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

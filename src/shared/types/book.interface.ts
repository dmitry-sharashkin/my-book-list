export enum ReadStatusEnum {
  planned = "запланировано",
  read = "читаю",
  reread = "перечитываю",
  alreadyRead = "прочитано",
  abandoned = "брошено",
}

export interface IBook {
  title: string;
  type: string;
  status: ReadStatusEnum;
  myRating?: number;
  communityRating?: number;
  image: string;
}

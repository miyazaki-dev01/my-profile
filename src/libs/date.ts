import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

export const formatDate = (date: string) => {
  const jst = dayjs(date).format("YYYY.MM.DD");

  return jst;
};

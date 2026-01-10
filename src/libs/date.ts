import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale("ja");
dayjs.extend(utc);
dayjs.extend(timezone);

const JST_TZ = "Asia/Tokyo";

/**
 * microCMSのISO文字列（例: 2021-10-14T15:00:00.000Z）を
 * JSTで YYYY.MM.DD に整形する
 */
export const formatDate = (date: string) => {
  const d = dayjs(date);
  if (!d.isValid()) return date;
  return d.tz(JST_TZ).format("YYYY.MM.DD");
};

/**
 * microCMSのISO文字列（例: 2021-10-14T15:00:00.000Z）を
 * JSTで YYYY.MM に整形する（年月だけ表示したい場合）
 */
export const formatYearMonth = (date: string) => {
  const d = dayjs(date);
  if (!d.isValid()) return date;
  return d.tz(JST_TZ).format("YYYY.MM");
};

/**
 * JSTの「年」を number で返す
 */
export const getJstYear = (date: string): number | null => {
  const d = dayjs(date);
  if (!d.isValid()) return null;
  const year = Number(d.tz(JST_TZ).format("YYYY"));
  return Number.isFinite(year) ? year : null;
};

/**
 * ソート用のtimestamp（ミリ秒）を返す
 */
export const toTimestamp = (date: string): number => {
  const d = dayjs(date);
  if (!d.isValid()) return 0;
  return d.valueOf();
};

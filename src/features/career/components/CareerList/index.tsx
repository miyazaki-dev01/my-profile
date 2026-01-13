import type { CareerItemWithYear } from "@/features/career/utils/careerModel";
import { CareerRow } from "@/features/career/components/CareerRow";
import * as styles from "./style.css";

type Props = {
  careerItems: CareerItemWithYear[];
};

export function CareerList({ careerItems }: Props) {
  return (
    <ul className={styles.list}>
      {careerItems.map((item) => (
        <CareerRow key={item.id} item={item} />
      ))}
    </ul>
  );
}

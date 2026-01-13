import type { CareerLatestYear } from "@/features/career/types/career";
import { DesktopSideNav } from "@/components/layouts/Navigation/DesktopSideNav";
import { MobileHeaderNav } from "@/components/layouts/Navigation/MobileHeaderNav";
import * as styles from "./style.css";

type Props = {
  careerLatestYear?: CareerLatestYear;
};

export function Navigation({ careerLatestYear }: Props) {
  return (
    <>
      <div className={styles.desktopSideNav}>
        <DesktopSideNav careerLatestYear={careerLatestYear} />
      </div>
      <div className={styles.mobileHeaderNav}>
        <MobileHeaderNav careerLatestYear={careerLatestYear} />
      </div>
    </>
  );
}

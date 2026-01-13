import type { SkillItem } from "@/features/skill/types/skill";
import { FallbackImage } from "@/components/elements/FallbackImage";
import * as styles from "./style.css";

type Props = {
  skillItem: SkillItem;
};

export function SkillCard({ skillItem }: Props) {
  const { name, label, icon, subIcon } = skillItem;
  const hasLabel = Boolean(label);

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <div className={styles.iconWrap}>
          <FallbackImage
            tag="img"
            fallbackSrc="default_profile"
            src={icon.url}
            alt={name}
            className={styles.iconImage}
          />
          {subIcon && (
            <div className={styles.subIconWrap}>
              <FallbackImage
                tag="img"
                fallbackSrc="default_profile"
                src={subIcon.url}
                className={styles.iconImage}
              />
            </div>
          )}
        </div>

        <div className={styles.body({ hasLabel })}>
          <p className={styles.name}>{name}</p>
          {hasLabel && <p className={styles.label}>{label}</p>}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import {
  TwitterShareButton,
  FacebookShareButton,
  HatenaShareButton,
  FacebookIcon,
  XIcon,
  HatenaIcon,
  LinkedinShareButton,
  LinkedinIcon,
  LineShareButton,
  LineIcon,
} from "react-share";
import * as styles from "./style.css";

type Props = {
  url: string;
  title: string;
};

export const SnsShareIcons: React.FC<Props> = ({ url, title }) => {
  return (
    <div className={styles.SnsShareContentStyle}>
      <div className={styles.ShareTextStyle}>Share</div>

      <div className={styles.ShareIconsStyle}>
        <TwitterShareButton url={url} title={title}>
          <XIcon round className={styles.shareIconStyle} />
        </TwitterShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon round className={styles.shareIconStyle} />
        </FacebookShareButton>
        <LineShareButton url={url} title={title}>
          <LineIcon round className={styles.shareIconStyle} />
        </LineShareButton>
        <HatenaShareButton url={url} title={title}>
          <HatenaIcon round className={styles.shareIconStyle} />
        </HatenaShareButton>
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon round className={styles.shareIconStyle} />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

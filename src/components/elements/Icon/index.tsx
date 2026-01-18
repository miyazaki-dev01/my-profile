import { type IconName, ICONS } from "@/constants/icons";
import { type Color, colors } from "@/themes/colors";

type Props = {
  name: IconName;
  size: number;
  fill?: Color;
};

export function Icon({ name, size, fill = "black" }: Props) {
  const IconElement = ICONS[name];

  return <IconElement width={size} height={size} fill={colors[fill]} />;
}

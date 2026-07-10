import * as Icons from "lucide-react";

export const getIcon = (iconName, color, sizeClass = "") => {
  const IconComponent = Icons[iconName];
  if (!IconComponent) return null;

  const isHexColor = color?.startsWith("#");

  return (
    <IconComponent
      strokeWidth={1.5}
      className={sizeClass}
      style={isHexColor ? { color } : undefined}
    />
  );
};

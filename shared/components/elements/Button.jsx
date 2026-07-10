import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import * as LucideIcons from "lucide-react";
import { cn } from "@/shared/utils/cn";

const buttonVariants = cva(
  // Base styles
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-xl",
    "gap-2",
    "cursor-pointer",
    "transition-colors",
    "duration-200",
  ],
  {
    variants: {
      variant: {
        initial: "border-0",
        outlined: "bg-transparent border",
        "outlined-filled": "border",
      },
      color: {
        green: "",
        blue: "",
        white: "",
        cyan: "",
      },
      size: {
        large: [
          "h-13",
          "min-w-15",
          "min-h-13",
          "py-2",
          "px-4",
          "desktop:h-15",
          "desktop:min-w-15",
          "desktop:min-h-15",
          "desktop:py-2.5",
          "desktop:px-5",
        ],
        medium: [
          "h-12",
          "min-w-15",
          "min-h-12",
          "py-2",
          "px-4",
          "desktop:h-13",
          "desktop:min-w-13",
          "desktop:min-h-13",
          "desktop:py-2",
          "desktop:px-4",
        ],
        small: [
          "h-11",
          "min-w-15",
          "min-h-10",
          "py-2",
          "px-4",
          "desktop:h-12",
          "desktop:min-w-13",
          "desktop:min-h-12",
          "desktop:py-2",
          "desktop:px-4",
        ],
      },
    },
    compoundVariants: [
      {
        variant: "initial",
        color: "green",
        className:
          "bg-primary-1/20 text-primary-1 hover:bg-primary-1 hover:text-teritary-3",
      },
      {
        variant: "outlined",
        color: "green",
        className:
          "border-primary-1 text-primary-1 hover:bg-primary-1 hover:text-teritary-3 hover:border-2",
      },
      {
        variant: "outlined-filled",
        color: "green",
        className:
          "bg-primary-1/20 border-primary-1 text-primary-1 hover:bg-primary-1 hover:text-teritary-3 hover:border-2",
      },
      {
        variant: "initial",
        color: "blue",
        className:
          "bg-secondary-1/20 text-secondary-1 border-2 border-secondary-1 hover:bg-secondary-1 hover:text-teritary-3",
      },
      {
        variant: "outlined",
        color: "blue",
        className:
          "border-secondary-1 text-secondary-1 hover:bg-secondary-1 hover:text-teritary-3 hover:border-2",
      },
      {
        variant: "outlined-filled",
        color: "blue",
        className:
          "bg-secondary-1/20 border-secondary-1 text-secondary-1 hover:bg-secondary-1 hover:text-teritary-3 hover:border-2",
      },
      {
        variant: "initial",
        color: "white",
        className:
          "bg-white/20 text-white hover:bg-white hover:text-teritary-3 hover:border-2 hover:border-white",
      },
      {
        variant: "outlined",
        color: "white",
        className:
          "border-white text-white hover:bg-white hover:text-teritary-3 hover:border-2",
      },
      {
        variant: "outlined-filled",
        color: "white",
        className:
          "bg-white/20 border-white text-white hover:bg-white hover:text-teritary-3 hover:border-2",
      },
      {
        variant: "initial",
        color: "cyan",
        className:
          "bg-secondary-2/20 text-secondary-2 hover:bg-secondary-2 hover:text-teritary-3",
      },
      {
        variant: "outlined",
        color: "cyan",
        className:
          "border-secondary-2 text-secondary-2 hover:bg-secondary-2 hover:text-teritary-3 hover:border-2",
      },
      {
        variant: "outlined-filled",
        color: "cyan",
        className:
          "bg-secondary-2/20 border-secondary-2 text-secondary-2 hover:bg-secondary-2 hover:text-teritary-3 hover:border-2",
      },
    ],
    defaultVariants: {
      variant: "initial",
      size: "large",
      color: "green",
    },
  }
);

const textSizeClasses = {
  large: "type-h6 desktop:type-subtitle-1",
  medium: "type-subtitle-1 desktop:type-subtitle-1-5",
  small: "type-subtitle-1 desktop:type-subtitle-2",
};

const iconWrapperClasses = {
  large: "size-6 desktop:size-8",
  medium: "size-5 desktop:size-6",
  small: "size-5 desktop:size-6",
};

function renderIcon(iconName) {
  if (!iconName) return null;
  const pascalCase = iconName
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
  const Icon = LucideIcons[pascalCase];
  if (!Icon) return null;
  return <Icon className="size-full" />;
}

function Button({
  children,
  variant,
  size = "large",
  color = "green",
  icon,
  iconPosition = "end",
  className,
  ...props
}) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, color }), className)}
      {...props}
    >
      {icon && iconPosition === "start" && (
        <span
          className={cn(
            "inline-flex items-center justify-center",
            iconWrapperClasses[size]
          )}
        >
          {renderIcon(icon)}
        </span>
      )}
      <span className={textSizeClasses[size]}>{children}</span>
      {icon && iconPosition === "end" && (
        <span
          className={cn(
            "inline-flex items-center justify-center",
            iconWrapperClasses[size]
          )}
        >
          {renderIcon(icon)}
        </span>
      )}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["initial", "outlined", "outlined-filled"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  color: PropTypes.oneOf(["green", "blue", "white", "cyan"]),
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(["start", "end"]),
  className: PropTypes.string,
};

export default Button;

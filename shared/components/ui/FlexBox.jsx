"use client";

import { cn } from "@/shared/utils/cn";
import { cva } from "class-variance-authority";
import React, { useCallback } from "react";
import { Copy, Share2, Check } from "lucide-react";
import PropTypes from "prop-types";

const flexBoxVariants = cva(
  "relative inline-flex flex-col transition-all duration-200 w-fit h-fit rounded-[12px] p-[24px]",
  {
    variants: {
      variant: {
        default:
          "bg-teritary-2 border border-white-6 text-primary-1 type-body-3",
        outline: "bg-transparent border border-white-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const FlexBox = React.forwardRef(
  ({ className, variant, children, showDesktopIcons, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false);

    const extractText = (node) => {
      if (typeof node === "string") return node;
      if (Array.isArray(node)) return node.map(extractText).join("");
      if (React.isValidElement(node)) return extractText(node.props.children);
      return "";
    };

    const handleCopy = useCallback(() => {
      const textToCopy = extractText(children);

      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          setCopied(true);

          setTimeout(() => setCopied(false), 2000);
        });
      }
    }, [children]);

    return (
      <div
        ref={ref}
        className={cn(flexBoxVariants({ variant }), className)}
        {...props}
      >
        <div className="w-full whitespace-pre-wrap">{children}</div>

        <div
          className={cn(
            "items-center gap-3 mt-4 self-start",
            showDesktopIcons ? "flex" : "flex md:hidden",
          )}
        >
          <button className="text-white hover:text-primary-1 transition-colors cursor-pointer">
            <Share2 size={20} />
          </button>

          <button
            onClick={handleCopy}
            className={cn(
              "transition-colors cursor-pointer",
              copied ? "text-primary-2" : "text-white hover:text-primary-1",
            )}
            title="Copy to clipboard"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>
      </div>
    );
  },
);

FlexBox.displayName = "FlexBox";

FlexBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outline"]),
  showDesktopIcons: PropTypes.bool,
};

export { FlexBox, flexBoxVariants };

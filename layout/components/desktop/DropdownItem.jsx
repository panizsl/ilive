import { useCallback } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { cn } from "@/shared/utils/cn";

export default function DropdownItem({
  title,
  description,
  icon,
  badge,
  slug,
  onItemClick,
}) {
  const handleClick = useCallback(() => {
    onItemClick?.();
  }, [onItemClick]);

  const baseClasses = cn(
    "rounded-lg p-6 flex flex-row gap-6 items-start cursor-pointer transition-colors group",
    "hover:bg-teritary-4"
  );

  const content = (
    <>
      {icon && (
        <span
          className="size-12 shrink-0 transition-colors [&>svg]:size-full"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      <div className="flex-1 flex flex-col gap-2 text-right">
        <header className="flex flex-row items-start justify-start gap-2">
          {badge && (
            <mark className="bg-primary-1/20 text-primary-1 type-captions-2 px-3 py-0.5 rounded not-italic">
              {badge}
            </mark>
          )}
          <h3
            className={cn(
              "type-subtitle-1 transition-colors",
              badge ? "text-white-3" : "text-white-1 group-hover:text-white"
            )}
          >
            {title}
          </h3>
        </header>
        {description && (
          <p
            className={cn(
              "type-captions-2 transition-colors",
              badge ? "text-white-3" : "text-white-2 group-hover:text-white"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </>
  );

  if (slug) {
    return (
      <Link
        href={`/products/${slug}`}
        onClick={handleClick}
        aria-label={`Navigate to ${title}`}
      >
        <article className={baseClasses}>{content}</article>
      </Link>
    );
  }

  return (
    <article
      className={baseClasses}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={title}
    >
      {content}
    </article>
  );
}

DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.node,
  badge: PropTypes.string,
  slug: PropTypes.string,
  onItemClick: PropTypes.func,
};

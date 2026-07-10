import PropTypes from "prop-types";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/shared/utils/cn";

export function Breadcrumb({ items, className }) {
  return (
    <nav
      className={cn("bg-teritary-1", className)}
      aria-label="Breadcrumb navigation"
    >
      <ol
        className="flex gap-2 items-center justify-start px-0 py-3 max-w-335 mx-auto"
        role="list"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="flex gap-2 items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {item.href && !item.active ? (
              <Link
                href={item.href}
                className={cn(
                  "type-captions-2 shrink-0 text-nowrap text-white-2 hover:text-white transition-colors",
                )}
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span
                className={cn(
                  "type-captions-2 shrink-0 text-nowrap",
                  item.active ? "text-white" : "text-white-2",
                )}
                aria-current={item.active ? "page" : undefined}
                itemProp="name"
              >
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 1)} />

            {index < items.length - 1 && (
              <ChevronLeft
                className="size-4 text-white-2 shrink-0"
                aria-hidden="true"
                role="presentation"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      active: PropTypes.bool,
    }),
  ).isRequired,
  className: PropTypes.string,
};

Breadcrumb.defaultProps = {
  className: "",
};

export default Breadcrumb;

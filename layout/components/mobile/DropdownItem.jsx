import { useCallback } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { getIcon } from "@/shared/utils/iconUtils";

export function DropdownItem({ title, icon, color, href, onClick }) {
  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  const baseClassName =
    "flex gap-3 items-center justify-start w-full px-3 py-3 cursor-pointer hover:bg-teritary-3 transition-colors";

  const content = (
    <>
      {icon && <span aria-hidden="true">{getIcon(icon, color, "size-8")}</span>}
      <span className="type-body-1 text-white">{title}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClassName}
        onClick={handleClick}
        aria-label={`Navigate to ${title}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={baseClassName}
      onClick={handleClick}
      aria-label={title}
    >
      {content}
    </button>
  );
}

DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default DropdownItem;

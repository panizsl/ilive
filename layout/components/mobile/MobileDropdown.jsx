import { useCallback } from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";
import DropdownItem from "@/layout/components/mobile/DropdownItem";

export function MobileDropdown({ title, items, onBack, onItemClick }) {
  const handleBack = useCallback(() => {
    onBack?.();
  }, [onBack]);

  return (
    <nav
      className="flex-1 overflow-y-auto px-6 scrollbar-hidden"
      role="navigation"
      aria-label="Mobile dropdown navigation"
    >
      {/* Back Navigation */}
      <header className="flex flex-col items-start py-3 border-b border-[#3D6069]">
        <button
          type="button"
          className="flex gap-2 items-center justify-start py-3 cursor-pointer hover:bg-teritary-3 transition-colors"
          onClick={handleBack}
          aria-label="Go back to previous menu"
        >
          <ChevronRight className="size-6 text-primary-2" aria-hidden="true" />
          <span className="type-body-1 font-bold text-primary-2">{title}</span>
        </button>
      </header>

      {/* Menu Items */}
      <ul
        className="flex flex-col items-start px-3 py-5 w-full"
        role="list"
        aria-label="Menu items"
      >
        {items.map((item, index) => (
          <li
            key={item.id || item.slug || index}
            role="listitem"
            className="w-full"
          >
            <DropdownItem
              title={item.title}
              icon={item.icon}
              color={item.color}
              href={item.slug ? `/products/${item.slug}` : item.href}
              onClick={onItemClick}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

MobileDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      icon: PropTypes.string,
      color: PropTypes.string,
      slug: PropTypes.string,
      href: PropTypes.string,
    }),
  ).isRequired,
  onBack: PropTypes.func.isRequired,
  onItemClick: PropTypes.func,
};

export default MobileDropdown;

import { useCallback } from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";
import { cn } from "@/shared/utils/cn";
import { solutionsSubmenuData } from "@/shared/data/headerData";
import DropdownItem from "@/layout/components/mobile/DropdownItem";

export function SolutionsDropdown({ onBack, onItemClick }) {
  const { title, sections } = solutionsSubmenuData;

  const handleBack = useCallback(() => {
    onBack?.();
  }, [onBack]);

  return (
    <nav
      className="flex-1 overflow-y-auto px-6 scrollbar-hidden"
      role="navigation"
      aria-label="Solutions navigation menu"
    >
      {/* Back Navigation */}
      <header className="flex flex-col items-start py-3 border-b border-[#3D6069]">
        <button
          type="button"
          className="flex gap-2 items-center justify-start py-3 cursor-pointer hover:bg-teritary-3 transition-colors"
          onClick={handleBack}
          aria-label="Go back to main menu"
        >
          <ChevronRight className="size-6 text-primary-2" aria-hidden="true" />
          <span className="type-body-1 font-bold text-primary-2">{title}</span>
        </button>
      </header>

      {/* Category Sections */}
      {sections.map((section, sectionIndex) => (
        <section
          key={section.id || sectionIndex}
          className={cn(
            "flex flex-col gap-5 items-start py-5 w-full",
            sectionIndex < sections.length - 1 && "border-b border-[#3D6069]",
          )}
          aria-labelledby={`section-heading-${sectionIndex}`}
        >
          <h2
            id={`section-heading-${sectionIndex}`}
            className="type-subtitle-2 text-white-3 text-right"
          >
            {section.title}
          </h2>
          <ul
            className="flex flex-col items-start px-3 w-full"
            role="list"
            aria-label={`${section.title} items`}
          >
            {section.items.map((item, itemIndex) => (
              <li key={item.id || itemIndex} role="listitem" className="w-full">
                <DropdownItem
                  title={item.title}
                  icon={item.icon}
                  color={item.color}
                  onClick={onItemClick}
                />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  );
}

SolutionsDropdown.propTypes = {
  onBack: PropTypes.func.isRequired,
  onItemClick: PropTypes.func,
};

export default SolutionsDropdown;

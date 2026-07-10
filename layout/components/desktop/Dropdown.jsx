import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import DropdownItem from "@/layout/components/desktop/DropdownItem";

export default function Dropdown({ items, showPreview = false, onItemClick }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const previewImage = hoveredItem?.image || items[0]?.image;

  return (
    <nav
      className="bg-teritary-3 rounded-b-2xl shadow-[-41px_34px_40px_0px_rgba(0,0,0,0.24)] overflow-hidden border-x border-b border-white-6"
      role="navigation"
      aria-label="Dropdown navigation menu"
    >
      <div className="flex flex-row">
        {/* Items Grid */}
        <section className="flex-1 p-8" aria-label="Menu items">
          <ul className="grid grid-cols-3 gap-4" role="list">
            {items.map((item, index) => (
              <li
                key={item.id || item.slug || index}
                role="listitem"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <DropdownItem {...item} onItemClick={onItemClick} />
              </li>
            ))}
          </ul>
        </section>

        {/* Preview Section */}
        {showPreview && (
          <aside
            className="w-81.25 bg-teritary-3 border-l border-white-6 p-6"
            aria-label="Preview section"
          >
            <figure className="bg-teritary-1 rounded-xl h-full relative overflow-hidden">
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt={hoveredItem?.title || "Product preview"}
                  fill
                  sizes="325px"
                  className="object-cover transition-opacity duration-300"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <span className="size-48 rounded-full border border-primary-2 blur-[20px]" />
                </div>
              )}
            </figure>
          </aside>
        )}
      </div>
    </nav>
  );
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      icon: PropTypes.node,
      badge: PropTypes.string,
      slug: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  showPreview: PropTypes.bool,
  onItemClick: PropTypes.func,
};

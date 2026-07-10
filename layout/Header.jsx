import { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/shared/utils/cn";
import { getIcon } from "@/shared/utils/iconUtils";
import Button from "@/shared/components/elements/Button";
import Dropdown from "@/layout/components/desktop/Dropdown";
import SolutionsDropdown from "@/layout/components/desktop/SolutionsDropdown";
import {
  servicesData,
  resourcesData,
  defaultMenuItems,
} from "@/shared/data/headerData";

export default function Header({
  logoSrc = "/logo.png",
  menuItems = defaultMenuItems,
  loginButtonText = "ثبت نام/ورود",
  onLoginClick,
  products = [],
}) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = useCallback((label, hasDropdown) => {
    setHoveredItem(label);
    if (hasDropdown) {
      setOpenDropdown(label);
    } else {
      setOpenDropdown(null);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredItem(null);
    setOpenDropdown(null);
  }, []);

  const closeDropdown = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  const productsItems = useMemo(
    () =>
      products.map((item) => ({
        ...item,
        icon: getIcon(item.icon, item.color),
      })),
    [products]
  );

  const servicesItems = useMemo(
    () =>
      servicesData.map((item) => ({
        ...item,
        icon: getIcon(item.icon, item.color),
      })),
    []
  );

  const resourcesItems = useMemo(
    () =>
      resourcesData.map((item) => ({
        ...item,
        icon: getIcon(item.icon, item.color),
      })),
    []
  );

  const getDropdownComponent = useCallback(
    (dropdownType) => {
      switch (dropdownType) {
        case "products":
          return (
            <Dropdown
              items={productsItems}
              showPreview
              onItemClick={closeDropdown}
            />
          );
        case "solutions":
          return <SolutionsDropdown onItemClick={closeDropdown} />;
        case "services":
          return (
            <Dropdown
              items={servicesItems}
              showPreview
              onItemClick={closeDropdown}
            />
          );
        case "resources":
          return (
            <Dropdown
              items={resourcesItems}
              showPreview
              onItemClick={closeDropdown}
            />
          );
        default:
          return null;
      }
    },
    [productsItems, servicesItems, resourcesItems, closeDropdown]
  );

  const currentDropdownType = useMemo(
    () => menuItems.find((item) => item.label === openDropdown)?.dropdownType,
    [menuItems, openDropdown]
  );

  return (
    <header className="relative w-full flex justify-center" role="banner">
      {/* Desktop Navigation */}
      <nav
        className={cn(
          "h-23 hidden desktop:flex relative w-full max-w-360 transition-all duration-200 ease-in-out",
          openDropdown
            ? "bg-teritary-3 border-x border-white-6 rounded-b-none"
            : "bg-teritary-1 rounded-b-2xl"
        )}
        onMouseLeave={handleMouseLeave}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex flex-row items-center justify-between px-10 h-full w-full">
          {/* Logo and Menu Items */}
          <div className="flex flex-row gap-15 items-center">
            {/* Logo */}
            <Link href="/" aria-label="Go to homepage">
              <figure className="h-10 w-30.75 relative cursor-pointer">
                <Image
                  src={logoSrc}
                  alt="Company logo"
                  fill
                  sizes="123px"
                  className="object-contain"
                  priority
                />
              </figure>
            </Link>

            {/* Menu Items */}
            <ul
              className="flex flex-row gap-7 items-center h-full"
              role="menubar"
            >
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="relative flex items-center h-full"
                  role="none"
                >
                  {item.hasDropdown ? (
                    <button
                      type="button"
                      className="flex flex-row-reverse gap-2 items-center cursor-pointer py-2 px-1"
                      onMouseEnter={() =>
                        handleMouseEnter(item.label, item.hasDropdown)
                      }
                      onMouseLeave={() => setHoveredItem(null)}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="menu"
                      aria-label={`${item.label} menu`}
                      role="menuitem"
                    >
                      <ChevronDown
                        className={cn(
                          "size-6 transition-all",
                          openDropdown === item.label
                            ? "rotate-180 text-primary-2"
                            : "text-white"
                        )}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <span
                        className={cn(
                          "type-subtitle-1-5 whitespace-nowrap transition-colors",
                          hoveredItem === item.label ||
                            openDropdown === item.label
                            ? "text-primary-2"
                            : "text-white"
                        )}
                      >
                        {item.label}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="flex flex-row-reverse gap-2 items-center cursor-pointer py-2 px-1"
                      onMouseEnter={() =>
                        handleMouseEnter(item.label, item.hasDropdown)
                      }
                      onMouseLeave={() => setHoveredItem(null)}
                      role="menuitem"
                      aria-label={`Navigate to ${item.label}`}
                    >
                      <span
                        className={cn(
                          "type-subtitle-1-5 whitespace-nowrap transition-colors",
                          hoveredItem === item.label
                            ? "text-primary-2"
                            : "text-white"
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Login Button */}
          <Button
            variant="initial"
            color="blue"
            size="medium"
            onClick={onLoginClick}
            aria-label="Login or register"
          >
            {loginButtonText}
          </Button>
        </div>
      </nav>

      {/* Dropdown Menus - CSS transition instead of framer-motion */}
      <div
        className={cn(
          "absolute top-23 left-1/2 -translate-x-1/2 w-full max-w-360 z-50 hidden desktop:block transition-all duration-200 ease-out",
          openDropdown
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
        onMouseEnter={() => setOpenDropdown(openDropdown)}
        onMouseLeave={handleMouseLeave}
        role="menu"
        aria-label={`${openDropdown} submenu`}
      >
        {/* Border line between header and dropdown */}
        <div className="w-full h-px bg-white-6" aria-hidden="true" />
        {openDropdown && getDropdownComponent(currentDropdownType)}
      </div>
    </header>
  );
}

Header.propTypes = {
  logoSrc: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      hasDropdown: PropTypes.bool,
      dropdownType: PropTypes.oneOf([
        "products",
        "solutions",
        "services",
        "resources",
      ]),
    })
  ),
  loginButtonText: PropTypes.string,
  onLoginClick: PropTypes.func,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
      icon: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};

"use client";

import { useState, useId } from "react";
import PropTypes from "prop-types";
import { useClickOutside } from "@mantine/hooks";
import { ChevronDown } from "lucide-react";
import { cn } from "@/shared/utils/cn";

/**
 * Select Component
 * A custom styled select dropdown with label
 */
function Select({
  label,
  placeholder = "انتخاب کنید",
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  id,
  disabled = false,
  required = false,
  className,
  dir = "rtl",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  // Use mantine hook for click outside
  const selectRef = useClickOutside(() => setIsOpen(false));

  // Determine if controlled or uncontrolled
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : selectedValue;

  // Find selected option label
  const selectedOption = options.find((opt) => opt.value === currentValue);
  const displayText = selectedOption?.label || placeholder;

  const generatedId = useId();
  const selectId = id || name || generatedId;

  const handleSelect = (optionValue) => {
    if (!isControlled) {
      setSelectedValue(optionValue);
    }
    onChange?.({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  // Handle keyboard
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleDropdown();
    }
  };

  return (
    <div
      ref={selectRef}
      className={cn(
        "flex flex-col items-end gap-3 relative w-full max-w-88",
        // Mobile height with label
        "h-20.25",
        // Desktop height with label
        "desktop:h-21.25",
        className
      )}
      dir={dir}
    >
      {/* Label */}
      {label && (
        <label
          htmlFor={selectId}
          className={cn(
            "text-white text-right w-full",
            // Mobile: type-subtitle-1, Desktop: type-subtitle-1-5
            "type-subtitle-1 desktop:type-subtitle-1-5"
          )}
        >
          {label}
          {required && <span className="text-error-1 mr-1">*</span>}
        </label>
      )}

      {/* Select Button */}
      <button
        type="button"
        id={selectId}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={cn(
          "flex items-center justify-between w-full rounded-xl px-4 py-2.25 transition-all duration-200",
          // Mobile size
          "h-12 min-h-12 min-w-15",
          // Desktop size
          "desktop:h-13 desktop:min-h-13 desktop:min-w-15",
          // Background
          "bg-teritary-2",
          // Border
          isOpen ? "border border-primary-1" : "border border-transparent",
          // Disabled state
          disabled && "opacity-50 cursor-not-allowed",
          !disabled && "cursor-pointer"
        )}
      >
        {/* Selected Text */}
        <span
          className={cn(
            "type-body-1-5 text-right",
            currentValue ? "text-white" : "text-white-2"
          )}
        >
          {displayText}
        </span>

        {/* Arrow Icon */}
        <ChevronDown
          className={cn(
            "text-white-1 transition-transform duration-200 shrink-0",
            // Mobile size
            "size-6",
            // Desktop size
            "desktop:size-8",
            // Rotate when open
            isOpen && "rotate-180"
          )}
          strokeWidth={2}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul
          role="listbox"
          className={cn(
            "absolute z-50 rounded-xl overflow-hidden overflow-y-auto",
            // Position below select with gap
            "top-full mt-4 right-0",
            // Full width of parent - max 5 items
            "w-full max-h-57.25",
            // Desktop size - max 5 items
            "desktop:max-h-70",
            // Background
            "bg-teritary-3",
            // Border
            "border border-white-7"
          )}
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={currentValue === option.value}
              onClick={() => handleSelect(option.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSelect(option.value);
                }
              }}
              tabIndex={0}
              className={cn(
                "cursor-pointer text-right transition-colors duration-200",
                // Mobile size
                "h-11.5 px-3 py-3 gap-2.5",
                // Desktop size
                "desktop:h-14 desktop:px-6 desktop:py-4 desktop:gap-2.5",
                // Text style
                "type-body-1-5 desktop:type-subtitle-2",
                // Colors
                currentValue === option.value
                  ? "text-primary-1 bg-primary-1/10"
                  : "text-white hover:text-primary-1 hover:bg-primary-1/10"
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  dir: PropTypes.oneOf(["rtl", "ltr"]),
};

export default Select;

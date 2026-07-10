"use client";

import { useState, forwardRef, useId } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

/**
 * Input wrapper variants using CVA
 */
const wrapperVariants = cva("flex flex-col items-end w-full max-w-[352px]", {
  variants: {
    hasError: {
      true: "gap-3",
      false: "gap-3",
    },
  },
  defaultVariants: {
    hasError: false,
  },
});

/**
 * Input field variants using CVA
 */
const inputVariants = cva(
  [
    "w-full",
    "rounded-xl",
    "px-4",
    "py-[9px]",
    "gap-2",
    "min-w-[60px]",
    "text-right",
    "outline-none",
    "transition-all",
    "duration-200",
  ],
  {
    variants: {
      state: {
        default: "bg-teritary-2 border border-transparent",
        hover: "bg-teritary-3 border border-transparent",
        focus: "bg-teritary-2 border border-primary-1 caret-white",
        filled: "bg-teritary-2 border border-transparent text-white",
        error: "bg-teritary-2 border border-error-1",
      },
      size: {
        desktop: "h-[52px] min-h-[52px]",
        mobile: "h-12 min-h-12",
      },
    },
    defaultVariants: {
      state: "default",
      size: "mobile",
    },
  }
);

/**
 * Input Component
 * A styled input field with label, error state, and various interaction states
 */
const Input = forwardRef(function Input(
  {
    label,
    placeholder = "",
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    error,
    errorMessage,
    type = "text",
    name,
    id,
    disabled = false,
    required = false,
    className,
    inputClassName,
    dir = "rtl",
    ...props
  },
  ref
) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue || "");

  // Determine if controlled or uncontrolled
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const isFilled = currentValue && currentValue.length > 0;

  // Determine current state
  const getState = () => {
    if (error) return "error";
    if (isFocused) return "focus";
    if (isFilled) return "filled";
    if (isHovered) return "hover";
    return "default";
  };

  const handleChange = (e) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const generatedId = useId();
  const inputId = id || name || generatedId;

  return (
    <div
      className={cn(
        wrapperVariants({ hasError: !!error }),
        // Desktop height with label
        error ? "desktop:h-28.25" : "desktop:h-21.25",
        // Mobile height with label
        error ? "h-27.25" : "h-20.25",
        className
      )}
      dir={dir}
    >
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            "text-white text-right w-full",
            // Mobile: type-subtitle-1, Desktop: type-captions
            "type-subtitle-1 desktop:type-captions"
          )}
        >
          {label}
          {required && <span className="text-error-1 mr-1">*</span>}
        </label>
      )}

      {/* Input Field */}
      <input
        ref={ref}
        id={inputId}
        name={name}
        type={type}
        value={isControlled ? value : undefined}
        defaultValue={!isControlled ? defaultValue : undefined}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          inputVariants({ state: getState() }),
          "h-12 min-h-12",
          "desktop:h-13 desktop:min-h-13",
          "placeholder:text-white-3 placeholder:type-body-1 desktop:placeholder:type-subtitle-2",
          "text-white type-body-1 desktop:type-subtitle-1-5",
          !isFocused && !error && isHovered && "bg-teritary-3",
          disabled && "opacity-50 cursor-not-allowed",
          inputClassName
        )}
        {...props}
      />

      {/* Error Message */}
      {error && errorMessage && (
        <span
          className="type-captions text-error-1 text-right w-full pr-4"
          role="alert"
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  dir: PropTypes.oneOf(["rtl", "ltr"]),
};

export default Input;

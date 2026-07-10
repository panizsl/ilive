import React from "react";
import { cn } from "@/shared/utils/cn";
import { cva } from "class-variance-authority";

// --- Badge Variants using CVA ---
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-[2px] font-poppins font-medium text-[8px] leading-[150%]",
  {
    variants: {
      variant: {
        get: "bg-[#29ABE633] text-secondary-1 w-[27px] h-[16px]",
        patch: "bg-[#C5DB0033] text-yellow-1 w-[36px] h-[16px]",
      },
    },
    defaultVariants: {
      variant: "get",
    },
  },
);

const Badge = ({ children, variant, className }) => (
  <span className={cn(badgeVariants({ variant }), className)}>{children}</span>
);

const DevSidebar = ({ mainTitle, sections }) => {
  return (
    <aside className="w-78.5 h-270.75 bg-teritary-1 flex flex-col overflow-hidden sticky top-0">
      {/* Header Section */}
      <div className="w-66.5 h-18 mx-auto pt-0 pb-6 border-b border-white-5 flex items-end justify-start">
        <h1 className="font-poppins font-semibold text-[32px] leading-[150%] text-[#FCFCFC]">
          {mainTitle}
        </h1>
      </div>
      {/* Shadow Effect below border */}
      <div
        className="w-72.5 h-8 mx-auto shrink-0"
        style={{
          background:
            "linear-gradient(0deg, #041A20 0%, rgba(4, 26, 32, 0) 100%)",
          transform: "rotate(-180deg)",
        }}
      />

      {/* Scrollable Content Container */}
      <div className="flex-1 h-84.25 overflow-y-auto custom-sidebar-scroll px-6 flex flex-col gap-10 mt-2">
        {sections.map((section, sIdx) => (
          <div key={sIdx} className="flex flex-col gap-4">
            {/* Group Title  */}
            <h3 className="type-captions text-white-4 text-right">
              {section.groupTitle}
            </h3>

            {/* Items title) */}
            <ul className="flex flex-col gap-3 w-full">
              {section.items.map((item, iIdx) => (
                <li
                  key={iIdx}
                  className={cn(
                    "group flex items-center justify-between cursor-pointer py-1 relative w-full transition-all",
                  )}
                >
                  <div className="flex items-center gap-1">
                    <span
                      className={cn(
                        "type-subtitle-2 self-start text-right transition-colors w-full",
                        item.isActive
                          ? "text-primary-2"
                          : "text-white-3 group-hover:text-primary-2",
                      )}
                    >
                      {item.title}
                    </span>
                    {item.badgeType && (
                      <Badge variant={item.badgeType}>
                        {item.badgeType.toUpperCase()}
                      </Badge>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default DevSidebar;

import PropTypes from "prop-types";
import Link from "next/link";
import { Building2, MapPin, Clock3 } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

/* ================= CARD VARIANTS ================= */

const jobCardVariants = cva(
  [
    "w-[334px] h-[188px] rounded-[8px] px-[20px] pt-[16px] pb-[24px]",
    "border border-solid bg-teritary-2",
    "flex flex-col justify-between",
    "transition-all duration-300",
    "relative overflow-hidden group",
    "min-[1201px]:w-[520px] min-[1201px]:h-[163px] min-[1201px]:rounded-[12px] min-[1201px]:px-[24px] min-[1201px]:pt-[20px] min-[1201px]:pb-[28px]",
  ],
  {
    variants: {
      interactive: {
        true: "cursor-pointer hover:shadow-lg active:scale-[0.98]",
        false: "",
      },
      status: {
        default: "border-white-5",
        highlighted: "border-primary-100",
      },
    },
    defaultVariants: {
      interactive: false,
      status: "default",
    },
  },
);

const titleBarVariants = cva([
  "w-full h-[54px]",
  "flex items-center justify-start",
  "border-b border-white-4",
  "pb-[16px] pt-[8px]",
  "relative z-10",
]);

const infoItemVariants = cva("flex items-center gap-[8px] h-[37px]");
const iconCircleVariants = cva([
  "w-[28px] h-[28px]",
  "rounded-full",
  "flex items-center justify-center",
  "bg-white-5",
]);
const infoTextVariants = cva("type-subtitle-2 text-white-2 text-right");

export default function JobCard({
  title,
  department,
  location,
  jobType,
  href,
  onClick,
  status,
}) {
  const content = (
    <div
      className={cn(
        jobCardVariants({
          interactive: !!href || !!onClick,
          status,
        }),
      )}
    >
      {/* GLOW EFFECT */}
      <div
        className={cn(
          "absolute -bottom-15 -left-15",
          "w-56.25 h-30",
          "rounded-full",
          "bg-secondary-2",
          "opacity-0 group-hover:opacity-100",
          "blur-[100px]",
          "transition-opacity duration-500 ease-out",
          "pointer-events-none z-0",
        )}
      />

      {/* TITLE */}
      <div className={titleBarVariants()}>
        <p className="min-[1201px]:type-subtitle-1 font-bold text-[20px] leading-[150%] tracking-[0px] text-white px-4 py-1 rounded-md">
          {title}
        </p>
      </div>

      {/* INFO ROW */}
      <div
        className={cn(
          "flex flex-wrap mt-3 relative z-10",
          "w-full h-auto gap-x-4 gap-y-0",

          "min-[1201px]:flex-nowrap min-[1201px]:gap-x-8 min-[1201px]:justify-start",
        )}
      >
        {/* Department */}
        <div className={cn(infoItemVariants(), "w-33.75 min-[1201px]:w-auto")}>
          <div className={iconCircleVariants()}>
            <Building2 size={20} className="text-secondary-2" />
          </div>
          <p className={infoTextVariants()}>{department}</p>
        </div>

        {/* Location */}
        <div className={cn(infoItemVariants(), "w-33.75 min-[1201px]:w-auto")}>
          <div className={iconCircleVariants()}>
            <MapPin size={20} className="text-secondary-2" />
          </div>
          <p className={infoTextVariants()}>{location}</p>
        </div>

        {/* Job Type */}
        <div
          className={cn(
            "w-full min-[1201px]:w-auto min-[1201px]:mr-10 flex justify-start",
          )}
        >
          <div
            className={cn(infoItemVariants(), "w-33.75 min-[1201px]:w-auto")}
          >
            <div className={iconCircleVariants()}>
              <Clock3 size={20} className="text-secondary-2" />
            </div>
            <p className={infoTextVariants()}>{jobType}</p>
          </div>
        </div>
      </div>
    </div>
  );

  if (href) return <Link href={href}>{content}</Link>;
  return content;
}

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  status: PropTypes.oneOf(["default", "highlighted"]),
};

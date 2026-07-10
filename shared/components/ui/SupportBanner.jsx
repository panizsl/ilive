import { cn } from "@/shared/utils/cn";
import { cva } from "class-variance-authority";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";

/**
 * Styles definitions using CVA
 */
const bannerVariants = cva("relative rounded-xl bg-teritary-3", {
  variants: {
    layout: {
      simpleWide:
        "flex flex-col justify-between items-start md:w-[840px] md:h-[152px] p-6 gap-2.5 mx-auto sm:flex-row sm:items-center w-full w-[328px] h-[184px]",
      simple:
        "flex flex-col justify-between items-start w-82 h-56.25 p-6 gap-2.5 mx-auto sm:flex-row sm:items-center sm:w-full sm:max-w-265 sm:h-38 sm:px-10 sm:py-6",
      withImage:
        "shadow-2xl flex flex-col items-center text-center w-82 mx-auto px-6 pt-10 h-full xl:flex-row xl:items-center xl:justify-between xl:text-right xl:w-full xl:max-w-7xl xl:h-60 xl:px-16 xl:mx-auto xl:pt-10",
    },
  },
});

const glowVariants = cva(
  "absolute z-5 pointer-events-none rounded-full bg-secondary-2 blur-[100px] top-0 -translate-y-1 left-1/2 -translate-x-1/2 opacity-40",
  {
    variants: {
      layout: {
        simple:
          "w-57.5 h-57.5 xl:opacity-40 xl:top-1/2 xl:-translate-y-1/2 xl:left-10",
        withImage:
          "w-57.5 h-57.5 xl:opacity-50 xl:top-1/2 xl:-translate-y-1/2 xl:left-300",
      },
    },
  },
);

const SupportBanner = ({
  title = "نیاز به راهنمایی دارید؟",
  subtitle = "تیم آیلایو همیشه اینجاست...",
  linkText = "ارتباط با آیلایو",
  imageSrc,
  layout = "simple", // default layout
}) => {
  // Render Simple Banner (No Image)
  if (!imageSrc) {
    return (
      <div className={cn(bannerVariants({ layout }))}>
        {/* Decorative Glow */}
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <div className={cn(glowVariants({ layout: "simple" }))} />
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col text-right md:gap-2.5 gap-5 w-full sm:w-98.75">
          <span className="type-subtitle-2 text-primary-2">
            این خدمت را نیاز دارید؟
          </span>
          <h6 className="type-h6 text-white">
            برای درخواست تیم‌اجرایی برای رویداد خود درخواست خود را ثبت کنید...
          </h6>
        </div>

        {/* Action Icon */}
        <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-xl bg-primary-90 cursor-pointer transition-transform duration-300 hover:-translate-x-5 pl-10">
          <ArrowLeft className="text-primary-2 w-[26px] h-[26px] md:w-[43px] md:h-[43px]" />
        </div>
      </div>
    );
  }

  // Render Full Banner (With Image)
  return (
    <div className={cn(bannerVariants({ layout: "withImage" }))}>
      {/* Background Glow Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none z-0">
        <div className={cn(glowVariants({ layout: "withImage" }))} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center xl:items-start gap-2 mb-10">
        <span className="type-body-1 text-white opacity-70">{title}</span>
        <h2 className="type-h3 mb-4 drop-shadow-md bg-clip-text text-transparent bg-linear-to-t from-white via-white to-white-1 xl:bg-linear-to-r xl:from-white xl:via-white xl:to-white-2">
          {subtitle}
        </h2>

        {/* Action Button */}
        <button className="flex items-center gap-1 text-primary-2 hover:gap-3 transition-all duration-300 cursor-pointer">
          <span className="type-subtitle-1">{linkText}</span>
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Hero Image Container */}
      <div className="h-full flex justify-start">
        <div className="relative z-10 mt-auto xl:absolute xl:bottom-0 xl:right-200 xl:w-112.5 xl:mt-0">
          <Image
            src={imageSrc}
            alt="Support Person"
            width={265.75}
            height={221}
            className="object-contain transform xl:w-120.25 xl:h-100 xl:translate-y-3"
          />
        </div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute justify-center inset-0 bg-white/5 backdrop-blur-[2px] rounded-xl z-0 pointer-events-none" />
    </div>
  );
};

SupportBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  linkText: PropTypes.string,
  imageSrc: PropTypes.string,
  // Controls layout variant of banner
  layout: PropTypes.oneOf(["simple", "simpleWide", "withImage"]),
};

export default SupportBanner;

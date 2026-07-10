import Image from "next/image";
import { cva } from "class-variance-authority";

/* Container */
const containerStyles = cva(
  "flex flex-col items-center gap-[12px] mx-auto w-[320px] h-[258px] md:w-[320px] md:h-[258px]",
);

/* Image Wrapper */
const imageWrapperStyles = cva(
  "relative w-[120px] h-[120px] md:w-[200px] md:h-[200px]",
);

/* Text Box */
const textBoxStyles = cva(
  "rounded-[8px] px-[12px] py-[8px] text-white-1 text-center type-body-1 w-[261px] h-[42px] md:w-[320px] md:h-[46px]",
);

export default function EmptyJobsState() {
  return (
    <div className={containerStyles()}>
      {/* IMAGE */}
      <div className={imageWrapperStyles()}>
        <Image
          src="/group.png"
          alt="No job positions available"
          fill
          className="object-contain"
        />
      </div>

      {/* TEXT BOX */}
      <div className={textBoxStyles()}>متأسفانه فرصت شغلی‌ای یافت‌ نشد</div>
    </div>
  );
}

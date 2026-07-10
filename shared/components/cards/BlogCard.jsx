import PropTypes from "prop-types";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { cn } from "@/shared/utils/cn";

export function BlogCard({
  imageUrl,
  imageAlt = "تصویر مقاله",
  categories = [],
  title,
  date,
  readTime,
  className,
  onClick,
}) {
  return (
    <article
      className={cn(
        "flex flex-col items-start overflow-clip relative rounded-xl w-full",
        "bg-teritary-2 cursor-pointer transition-shadow duration-300 hover:shadow-lg",
        className
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* image */}
      <figure className="relative shrink-0 w-full m-0">
        <div className="flex flex-col items-start pb-0 relative w-full pt-4 px-4 desktop:pt-6 desktop:px-6">
          <div className="relative rounded-xl shrink-0 w-full overflow-hidden h-47.25 desktop:h-60">
            <Image
              alt={imageAlt}
              src={imageUrl}
              fill
              sizes="(max-width: 1200px) 100vw, 50vw"
              className="object-center object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              priority={false}
            />
          </div>
        </div>
      </figure>

      {/* content */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-col items-start size-full">
          <div className="flex flex-col items-start relative w-full px-4 py-5 gap-6 desktop:p-6 desktop:gap-6">
            {/* categories */}
            {categories.length > 0 && (
              <ul className="flex gap-1 items-center relative shrink-0 flex-wrap list-none p-0 m-0">
                {categories.map((category, index) => (
                  <li key={index}>
                    <span className="flex items-center px-3 py-2 relative rounded-lg shrink-0 hover:opacity-80 transition-opacity bg-teritary-3">
                      <span
                        className="type-captions-2 font-semibold text-nowrap text-right text-white-1"
                        dir="auto"
                      >
                        {category}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Meta info and title */}
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <h3
                className="type-subtitle-2 desktop:type-subtitle-1 relative shrink-0 text-right w-full text-white-1"
                dir="auto"
              >
                {title}
              </h3>

              {/* Meta info */}
              <div className="flex gap-3 items-center justify-start relative shrink-0">
                <time
                  className="type-captions-2 desktop:type-captions text-nowrap text-right text-white-3 flex items-center gap-1.5"
                  dir="auto"
                >
                  <Calendar className="size-4" aria-hidden="true" />
                  {date}
                </time>

                <span className="h-4 w-px bg-white-6" aria-hidden="true" />

                <span
                  className="type-captions-2 desktop:type-captions text-nowrap text-right text-white-3 flex items-center gap-1.5"
                  dir="auto"
                >
                  <Clock className="size-4" aria-hidden="true" />
                  {readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

BlogCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default BlogCard;

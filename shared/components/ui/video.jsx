import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";
import { Play } from "lucide-react";

const videoVariants = cva(
  "relative overflow-hidden rounded-xl group cursor-pointer w-full",
  {
    variants: {
      size: {
        desktop: "max-w-[1059px] h-[596px]",
        mobile: "w-[328px] h-[246px]",
        responsive: "w-[328px] h-[246px] lg:w-[1059px] lg:h-[596px]",
        // variant:(medium)
        medium: "w-[328px] h-[246px] lg:w-[557px] lg:h-[314px]",
      },
    },
    defaultVariants: {
      size: "responsive",
    },
  },
);

const Video = ({ src, poster, className, size, caption }) => {
  return (
    <figure
      className={cn(videoVariants({ size }), className)}
      aria-label="Video preview"
    >
      {/* Poster Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${poster})` }}
      />

      {/* Bottom Gradient Overlay */}
      <div className="overlay-fade-bottom h-1/2" />

      {/* Play Button */}
      <button
        type="button"
        className={cn(
          "absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "flex items-center justify-center rounded-full transition-all duration-300",
          "bg-[#81D44D3D] border-2 border-primary-1 backdrop-blur-[2px]",
          "group-hover:scale-110 group-hover:bg-[#81D44D66] cursor-pointer",

          size === "medium" ? "w-15 h-15" : "w-15 h-15 lg:w-25 lg:h-25",
        )}
        aria-label="Play video"
      >
        <Play
          color="#9aed66"
          fill="#9aed66"
          className={cn(
            "rotate-180 transition-all duration-300",

            size === "medium" ? "w-5 h-5.75" : "w-5.5 h-6.25 lg:w-10 lg:h-10",
          )}
        />
      </button>
      {/* caption*/}
      {caption && (
        <div className="absolute z-10 bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 w-full max-w-68">
          <p className="type-body-2 text-white-1 text-center">{caption}</p>
        </div>
      )}
    </figure>
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["desktop", "mobile", "responsive", "medium"]),
  caption: PropTypes.string,
};

export default Video;

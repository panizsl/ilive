import PropTypes from "prop-types";
import { MapPin, Building2, Clock3 } from "lucide-react";
import { cva } from "class-variance-authority";
import Button from "@/shared/components/elements/Button";

/* CONTAINER  */

const containerVariants = cva([
  "w-full mx-auto",
  "border-b border-white-6",
  "flex flex-col",
  "desktop:max-w-[1060px]",
  "desktop:h-[240px]",
  "desktop:py-[60px]",
  "py-[24px]",
]);

/* CONTENT WRAPPER  */

const contentVariants = cva([
  "flex flex-col",
  "gap-[40px]",
  "desktop:flex-row desktop:items-center desktop:justify-between",
  "desktop:gap-[80px]",
]);

/*  TITLE */

const titleVariants = cva(["text-right", "text-white", "type-h3"]);

/* INFO ROW  */

const infoRowVariants = cva([
  "flex",
  "flex-row-reverse",
  "items-center",
  "justify-end",
  "md:justify-start",
  "gap-[16px]",
  "desktop:flex-row",
  "desktop:gap-[40px]",
]);

/* INFO ITEM  */

const infoItemVariants = cva(["flex items-center gap-[12px]", "h-[40px]"]);

const iconCircleVariants = cva([
  "w-[28px] h-[28px]",
  "md:w-[40px] md:h-[40px]",
  "rounded-full",
  "flex items-center justify-center",
  "bg-[#2ED1FF33]",
]);

const infoTextVariants = cva(["type-subtitle-1", "text-white-2", "text-right"]);

/*  COMPONENT  */

export default function JobDetail({
  title,
  department,
  location,
  jobType,
  buttonText = "ارسال درخواست",
}) {
  return (
    <section className={containerVariants()}>
      <div className={contentVariants()}>
        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-5 desktop:w-3xl">
          <h1 className={titleVariants()}>{title}</h1>

          <div className={infoRowVariants()}>
            {/* Location */}
            <div className={infoItemVariants()}>
              <div className={iconCircleVariants()}>
                <MapPin className="text-secondary-2 w-5 h-5 md:w-6 md:h-6" />
              </div>
              <p className={infoTextVariants()}>{location}</p>
            </div>

            {/* Department */}
            <div className={infoItemVariants()}>
              <div className={iconCircleVariants()}>
                <Building2 className="text-secondary-2 w-5 h-5 md:w-6 md:h-6" />
              </div>
              <p className={infoTextVariants()}>{department}</p>
            </div>

            {/* Job Type */}
            <div className={infoItemVariants()}>
              <div className={iconCircleVariants()}>
                <Clock3 className="text-secondary-2 w-5 h-5 md:w-6 md:h-6" />
              </div>
              <p className={infoTextVariants()}>{jobType}</p>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex">
          <Button
            variant="outlined-filled"
            color="blue"
            size="medium"
            icon="chevron-left"
            iconPosition="end"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}

/*  PROP TYPES  */

JobDetail.propTypes = {
  title: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

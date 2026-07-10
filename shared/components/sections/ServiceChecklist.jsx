import PropTypes from "prop-types";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/shared/utils/cn";
import Button from "@/shared/components/elements/Button";

/**
 * ChecklistItem - Single item with check icon
 */
function ChecklistItem({ text }) {
  return (
    <li className="flex gap-4 items-center justify-start">
      <Check className="size-7 desktop:size-8 text-primary-1 shrink-0" />
      <span className="type-subtitle-2 desktop:type-subtitle-1 text-white text-right text-nowrap">
        {text}
      </span>
    </li>
  );
}

ChecklistItem.propTypes = {
  text: PropTypes.string.isRequired,
};

function ServiceChecklist({
  title = "تیم اجرایی رویداد",
  description = "آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش مانند YouTube، Twitch، LinkedIn و Aparat — همه تنها با چند کلیک به آیلایو متصل می‌شوند.",
  checklistItems = [
    "کارگردان پخش",
    "مدیر پروژه (account manager)",
    "اپراتور صدا و تصویر",
    "نور پرداز",
    "ناظران فنی",
  ],
  buttonText = "بیشتر بدانید",
  buttonTextMobile = "درخواست خدمت",
  onButtonClick,
  backgroundImage = "/assets/images/service-bg.jpg",
  imageAlt = "",
  className,
}) {
  return (
    <section
      className={cn(
        "relative w-full bg-teritary-1 desktop:bg-transparent",
        className
      )}
      aria-labelledby="service-checklist-title"
    >
      <div className="flex flex-col desktop:flex-row items-start justify-end w-full">
        {/* Image Section */}
        <figure className="relative shrink-0 w-full desktop:w-147.5 h-50 desktop:h-222.25 order-1 desktop:order-2">
          {/* Background Image */}
          <Image
            src={backgroundImage}
            alt={imageAlt}
            fill
            className="object-cover object-center"
          />

          {/* Gradient Overlay - Desktop (Side fade from content side) */}
          <div
            className="hidden desktop:block absolute inset-y-0 right-0 w-72.5"
            style={{
              background:
                "linear-gradient(to left, var(--color-teritary-1) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Gradient Overlay - Desktop (Top fade) */}
          <div
            className="hidden desktop:block absolute top-0 inset-x-0 h-108.75"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-teritary-1) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Gradient Overlay - Mobile (Bottom fade) */}
          <div
            className="desktop:hidden absolute bottom-0 inset-x-0 h-20"
            style={{
              background:
                "linear-gradient(to top, var(--color-teritary-1) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Border - Mobile (Bottom of image) */}
          <div
            className="desktop:hidden absolute bottom-0 inset-x-0 h-px bg-white-6"
            aria-hidden="true"
          />
        </figure>

        {/* Content Section */}

        <article className="flex flex-col gap-6 desktop:gap-15 items-start px-4 py-8 desktop:pl-0 desktop:pr-10 desktop:py-20 w-full desktop:w-128.25 order-2 desktop:order-1">
          {/* Title & Description */}
          <header className="flex flex-col gap-5 desktop:gap-6 items-start text-right w-full">
            <h2
              id="service-checklist-title"
              className="type-h3 desktop:type-h3 text-white text-nowrap"
            >
              {title}
            </h2>
            <p className="type-body-2 text-white-1">{description}</p>
          </header>

          {/* Checklist Items */}
          <ul className="flex flex-col gap-2 desktop:gap-3 items-start w-77">
            {checklistItems.map((item, index) => (
              <ChecklistItem key={index} text={item} />
            ))}
          </ul>

          {/* Button */}
          <Button
            variant="outlined-filled"
            color="green"
            size="large"
            onClick={onButtonClick}
          >
            <span className="desktop:hidden">{buttonTextMobile}</span>
            <span className="hidden desktop:inline">{buttonText}</span>
          </Button>
        </article>
      </div>

      {/* Border Lines */}
      <div
        className="absolute inset-0 border-b border-white-6 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}

ServiceChecklist.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  checklistItems: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string,
  buttonTextMobile: PropTypes.string,
  onButtonClick: PropTypes.func,
  backgroundImage: PropTypes.string,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
};

export default ServiceChecklist;

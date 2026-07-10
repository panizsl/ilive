"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { cn } from "@/shared/utils/cn";
import Input from "@/shared/components/elements/Input";
import Select from "@/shared/components/elements/Select";
import Button from "@/shared/components/elements/Button";

/**
 * RequestForm - A contact/request form section
 * variant: "primary" (with image) | "secondary" (with title/subtitle and textarea)
 */
function RequestForm({
  variant = "primary",
  // Primary variant props
  nameLabel = "نام و نام خانوادگی",
  namePlaceholder = "نام خود را وارد کنید",
  phoneLabel = "شماره تماس",
  phonePlaceholder = "09123456789",
  serviceLabel = "نوع خدمات",
  servicePlaceholder = "انتخاب کنید",
  serviceOptions = [
    { value: "service1", label: "خدمت شماره ۱" },
    { value: "service2", label: "خدمت شماره ۲" },
    { value: "service3", label: "خدمت شماره ۳" },
  ],
  submitButtonText = "ارسال درخواست",
  onSubmit,
  image = "/assets/images/request.png",
  // Secondary variant props
  title = "ارسال درخواست",
  subtitle = "شما می‌توانید برای درخواست دمو، آموزش و حتی مشکلات پیش‌آمده از همین فرم با واحد پشتیبانی به صورت ۲۴ ساعته ارتباط برقرار کنید.",
  messageLabel = "متن درخواست",
  messagePlaceholder = "...اینجا بنویسید",
  className,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (variant === "secondary") {
      onSubmit?.({ name, phone, service, message });
    } else {
      onSubmit?.({ name, phone, service });
    }
  };

  // Secondary Variant
  if (variant === "secondary") {
    return (
      <>
        {/* Desktop Layout - Secondary */}
        <section
          className={cn(
            "hidden desktop:flex flex-row items-center justify-center relative w-full bg-teritary-1",
            className
          )}
          aria-labelledby="request-form-secondary-title"
        >
          <div className="flex gap-12 items-center justify-center p-20 relative size-full">
            {/* Title Section */}
            <div className="relative w-153.25 h-165 rounded-xl gap-10 px-20 shrink-0 flex flex-col items-center justify-center">
              <div
                className="absolute border border-white-4 inset-0 pointer-events-none rounded-xl"
                aria-hidden="true"
              />
              {/* Glow Effect */}
              <div
                className="glow-base glow-lg glow-color-green absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-3 items-start relative shrink-0 text-center w-full">
                <h2
                  id="request-form-secondary-title"
                  className="type-h2 text-white-1 w-full"
                  dir="auto"
                >
                  {title}
                </h2>
                <p className="type-body-1 text-white-2 w-full" dir="auto">
                  {subtitle}
                </p>
              </div>
            </div>
            {/* Form Section */}
            <article className="flex flex-col gap-12 items-start p-10 relative rounded-xl shrink-0 w-154.75">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-12 items-start relative shrink-0 w-full"
              >
                {/* Form Fields */}
                <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
                  {/* Name Field */}
                  <Input
                    label={nameLabel}
                    placeholder={namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name-secondary"
                    className="w-full max-w-full"
                  />

                  {/* Phone Field */}
                  <Input
                    label={phoneLabel}
                    placeholder={phonePlaceholder}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone-secondary"
                    type="tel"
                    className="w-full max-w-full"
                  />

                  {/* Service Select */}
                  <Select
                    label={serviceLabel}
                    placeholder={servicePlaceholder}
                    options={serviceOptions}
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    name="service-secondary"
                    className="w-full max-w-full"
                  />

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
                    <label
                      htmlFor="message-secondary"
                      className="type-captions text-white text-right w-full"
                    >
                      {messageLabel}
                    </label>
                    <textarea
                      id="message-secondary"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={messagePlaceholder}
                      rows={4}
                      className="h-30 min-h-15 w-full relative rounded-xl p-4 type-subtitle-1-5 text-right text-white bg-teritary-2 outline-none resize-none placeholder:text-white-3 focus:border focus:border-primary-1 transition-all duration-200"
                      dir="auto"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex w-full justify-end">
                  <Button
                    type="submit"
                    variant="outlined-filled"
                    color="blue"
                    size="medium"
                  >
                    {submitButtonText}
                  </Button>
                </div>
              </form>

              {/* Glow Effect */}
              <div
                className="glow-base glow-lg glow-color-blue absolute -top-10 -left-1 opacity-35"
                aria-hidden="true"
              />
            </article>
          </div>
        </section>

        {/* Mobile Layout - Secondary */}
        <section
          className={cn(
            "desktop:hidden flex flex-col items-center relative w-full bg-teritary-1",
            className
          )}
          aria-labelledby="request-form-secondary-title-mobile"
        >
          <div className="flex flex-col gap-10 items-center pb-30 pt-10 px-4 relative size-full">
            {/* Title Section */}
            <div className="flex flex-col gap-6 w-82 h-81 items-center justify-center px-6 py-10 relative rounded-xl shrink-0">
              <div
                className="absolute border border-white-4 inset-0 pointer-events-none rounded-xl"
                aria-hidden="true"
              />
              {/* Glow Effect */}
              <div
                className="glow-base glow-md glow-color-green absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-2 items-start relative shrink-0 text-center w-full">
                <h2
                  id="request-form-secondary-title-mobile"
                  className="type-h4 text-white-1 w-full"
                  dir="auto"
                >
                  {title}
                </h2>
                <p className="type-body-2 text-white-2 w-full" dir="auto">
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Form Section */}
            <article className="flex flex-col gap-12 items-start p-5 relative rounded-xl shrink-0 w-82">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-12 items-start relative shrink-0 w-full"
              >
                {/* Form Fields */}
                <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
                  {/* Name Field */}
                  <Input
                    label={nameLabel}
                    placeholder={namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name-secondary-mobile"
                    className="w-full max-w-full"
                  />

                  {/* Phone Field */}
                  <Input
                    label={phoneLabel}
                    placeholder={phonePlaceholder}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone-secondary-mobile"
                    type="tel"
                    className="w-full max-w-full"
                  />

                  {/* Service Select */}
                  <Select
                    label={serviceLabel}
                    placeholder={servicePlaceholder}
                    options={serviceOptions}
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    name="service-secondary-mobile"
                    className="w-full max-w-full"
                  />

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
                    <label
                      htmlFor="message-secondary-mobile"
                      className="type-subtitle-1 text-white text-right w-full"
                    >
                      {messageLabel}
                    </label>
                    <textarea
                      id="message-secondary-mobile"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={messagePlaceholder}
                      rows={6}
                      className="h-37.25 min-h-12 w-full relative rounded-xl px-4 py-3 type-body-2 text-right text-white bg-teritary-2 outline-none resize-none placeholder:text-white-3 focus:border focus:border-primary-1 transition-all duration-200"
                      dir="auto"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="outlined-filled"
                  color="blue"
                  size="small"
                  className="w-full"
                >
                  {submitButtonText}
                </Button>
              </form>

              {/* Glow Effect */}
              <div
                className="glow-base glow-lg glow-color-blue absolute -top-10 -left-1 opacity-35"
                aria-hidden="true"
              />
            </article>
          </div>
        </section>
      </>
    );
  }

  // Primary Variant (default)
  return (
    <>
      {/* Desktop Layout */}
      <section
        className={cn(
          "hidden desktop:block relative w-full max-w-360 mx-auto bg-teritary-1",
          className
        )}
        aria-labelledby="request-form-title"
      >
        {/* Grid Lines - Desktop (behind content) */}
        <div
          className="absolute left-20 top-0 bottom-0 w-px bg-white-6"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px bg-white-6"
          aria-hidden="true"
        />
        <div
          className="absolute right-20 top-0 bottom-0 w-px bg-white-6"
          aria-hidden="true"
        />
        <div
          className="absolute left-0 top-6 w-full h-px bg-white-6"
          aria-hidden="true"
        />
        <div
          className="absolute left-0 bottom-6 w-full h-px bg-white-6"
          aria-hidden="true"
        />

        {/* Content Grid */}
        <div className="relative grid grid-cols-2 gap-10 py-24 px-20">
          {/* Image Section - Left (RTL) */}
          <figure
            className="flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative h-111 w-106.25">
              <Image
                src={image}
                alt=""
                fill
                className="object-contain object-center"
              />
            </div>
          </figure>
          {/* Form Section - Right (RTL) */}
          <article className="relative flex flex-col gap-12 items-end p-10">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 items-start w-full"
            >
              {/* Name Field */}
              <Input
                label={nameLabel}
                placeholder={namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                className="w-full max-w-full"
              />

              {/* Phone Field */}
              <Input
                label={phoneLabel}
                placeholder={phonePlaceholder}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                type="tel"
                className="w-full max-w-full"
              />

              {/* Service Select */}
              <Select
                label={serviceLabel}
                placeholder={servicePlaceholder}
                options={serviceOptions}
                value={service}
                onChange={(e) => setService(e.target.value)}
                name="service"
                className="w-full max-w-full"
              />
            </form>

            {/* Submit Button */}
            <Button
              variant="outlined-filled"
              color="cyan"
              size="medium"
              onClick={handleSubmit}
            >
              {submitButtonText}
            </Button>

            {/* Glow Effect */}
            <div
              className="glow-base glow-lg glow-color-blue absolute -top-40 -left-10 opacity-35"
              aria-hidden="true"
            />
          </article>
        </div>
      </section>

      {/* Mobile Layout */}
      <section
        className={cn(
          "desktop:hidden relative w-full bg-teritary-1",
          className
        )}
        aria-labelledby="request-form-title-mobile"
      >
        {/* Grid Lines - Mobile (behind content) */}
        <div
          className="absolute left-4 top-0 bottom-0 w-px bg-white-6"
          aria-hidden="true"
        />
        <div
          className="absolute right-4 top-0 bottom-0 w-px bg-white-6"
          aria-hidden="true"
        />
        <div
          className="absolute left-0 top-4 w-full h-px bg-white-6"
          aria-hidden="true"
        />
        <div
          className="absolute left-0 bottom-4 w-full h-px bg-white-6"
          aria-hidden="true"
        />

        {/* Card Container */}
        <article className="relative mx-4 my-4 overflow-hidden">
          {/* Image Section with divider */}
          <figure className="w-full border-b border-white-6" aria-hidden="true">
            <div className="flex items-center justify-center px-15 py-10 w-full">
              <div className="relative h-54.5 w-52.25">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </figure>

          {/* Form Section */}
          <div className="relative w-full">
            <div className="flex flex-col gap-12 items-end px-5 py-10 w-full">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-start w-full"
              >
                {/* Name Field */}
                <Input
                  label={nameLabel}
                  placeholder={namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name-mobile"
                  className="w-full max-w-full"
                />

                {/* Phone Field */}
                <Input
                  label={phoneLabel}
                  placeholder={phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  name="phone-mobile"
                  type="tel"
                  className="w-full max-w-full"
                />

                {/* Service Select */}
                <Select
                  label={serviceLabel}
                  placeholder={servicePlaceholder}
                  options={serviceOptions}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  name="service-mobile"
                  className="w-full max-w-full"
                />
              </form>

              {/* Submit Button */}
              <Button
                variant="outlined-filled"
                color="cyan"
                size="small"
                onClick={handleSubmit}
              >
                {submitButtonText}
              </Button>

              {/* Glow Effect */}
              <div
                className="glow-base glow-lg glow-color-blue absolute -top-30 -left-30 opacity-35"
                aria-hidden="true"
              />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

RequestForm.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  nameLabel: PropTypes.string,
  namePlaceholder: PropTypes.string,
  phoneLabel: PropTypes.string,
  phonePlaceholder: PropTypes.string,
  serviceLabel: PropTypes.string,
  servicePlaceholder: PropTypes.string,
  serviceOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  submitButtonText: PropTypes.string,
  onSubmit: PropTypes.func,
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  messageLabel: PropTypes.string,
  messagePlaceholder: PropTypes.string,
  className: PropTypes.string,
};

export default RequestForm;

import ContactInfoPanel from "@/shared/components/sections/ContactInfoPanel";
import RequestForm from "@/shared/components/sections/RequestForm";
import Image from "next/image";
import React from "react";

function ContactUsPage() {
  return (
    <>
      {/* contact us - header*/}
      <header
        className="flex flex-col items-center justify-center container mx-auto md:w-360 w-67.75 h-70 md:h-93.5 desktop:gap-5 gap-3"
        aria-label="Contact Us Header"
      >
        <h2
          id="contact-header-title"
          className="text-white-1 type-h2 text-center"
        >
          تماس با ما
        </h2>
        <p className="text-white-2 type-h5-light text-center">
          با آیلایو، بدون وقفه در کنار شما خواهیم بود
        </p>
      </header>
      <section
        id="contact-info-section"
        aria-label="Contact Us Section"
        className="w-full container mx-auto max-w-360 min-h-185 flex flex-col desktop:flex-row items-center justify-center pt-10 pb-20 px-4 desktop:px-20 gap-6 desktop:gap-20"
      >
        <h2 id="contact-content-heading" className="sr-only">
          جزئیات تماس و موقعیت روی نقشه
        </h2>
        <div
          className="order-2 desktop:order-2 flex justify-center items-center pt-10 w-full"
          aria-label="Location Map"
        >
          {/* map */}
          <div className="w-full max-w-[620px] aspect-square desktop:max-w-[620px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571.8212417019788!2d51.000518578667226!3d35.83160448203763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dbfcf265b145b%3A0x28ff37491d94294!2sDelzhin%20Architecture%20Group!5e0!3m2!1sen!2s!4v1771134061706!5m2!1sen!2s"
              className="w-full h-full rounded-2xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact Info*/}
        <div
          className="order-1 desktop:order-1 w-full desktop:w-auto flex justify-center"
          aria-label="Contact Details Content"
        >
          <ContactInfoPanel
            title="پشتیبانی نرم‌افزار"
            addressTitle="آدرس ما"
            description="پشتیبانی آیلایو در روزهای شنبه تا چهارشنبه از ساعت ۹ الی ۱۸ و در روزهای پنجشنبه از ساعت ۹ الی ۱۴ آماده پاسخگویی به شما کاربران عزیز است."
            address="البرز، کرج ، عظیمیه ، 45 متری کاج ، کنارگذر پل آزادگان ، ساختمان سناتور ، واحد 201"
            phoneTitle="تلفن تماس"
            phoneNumbers={["۰۲۶ - ۹۱۰۰۶۵۵۰ ", "۰۲۶ - ۹۱۰۰۶۵۵۰"]}
            emailTitle="ایمیل"
            email="Support@ilive.com"
          />
        </div>
      </section>

      {/* RequestForm */}
      <section
        aria-labelledby="request-form-secondary-title"
        className="w-full container mx-auto max-w-360 flex flex-col desktop:gap-12 desktop:p-20"
      >
        <RequestForm variant="secondary" />
      </section>
    </>
  );
}

export default ContactUsPage;

import React from "react";
import PropTypes from "prop-types";
import Button from "../elements/Button";

const ContactInfoPanel = ({
  title,
  description,
  addressTitle,
  address,
  phoneTitle,
  phoneNumbers,
  emailTitle,
  email,
}) => {
  return (
    // Main Container
    <div className="flex flex-col gap-10 w-82 h-auto md:w-155">
      {/* Software Support */}
      <div className="flex flex-col w-full h-auto md:min-h-62.5 px-6 border-r-4 border-primary-2 gap-10 pb-4">
        {/* title and description */}
        {/* Removing fixed height (h-auto) and using gap for spacing */}
        <div className="flex flex-col gap-3 w-full md:w-143">
          <h2 className="text-white type-h6">{title}</h2>
          <p className="text-white-1 type-body-1 text-justify w-full md:w-129.75">
            {description}
          </p>
        </div>

        {/* button */}

        <div className="flex justify-start mt-auto">
          <Button variant="outlined-filled" color="green" size="medium">
            ارسال تیکت
          </Button>
        </div>
      </div>

      {/* address section */}
      <div className="flex flex-col justify-center gap-3 w-full h-auto px-6 border-r-4 border-primary-2">
        <h3 className="text-white type-h6">{addressTitle}</h3>
        <p className="text-white-1 type-body-1 line-clamp-4">{address}</p>
      </div>

      {/* phone number section */}
      <div className="flex flex-col justify-center gap-3 w-full h-auto px-6 border-r-4 border-primary-2">
        <h3 className="text-white type-h6">{phoneTitle}</h3>
        <div className="flex justify-start gap-2 text-white-1 type-body-1 line-clamp-3 leading-relaxed">
          {phoneNumbers.map((num, index) => (
            <span key={index}>
              {num}{" "}
              {index < phoneNumbers.length - 1 && (
                <span className="mx-2 text-white-5">|</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* email section */}
      <div className="flex flex-col justify-center gap-3 w-full h-15.5 md:h-19.5 px-6 border-r-4 border-primary-2">
        <h3 className="text-white type-h6">{emailTitle}</h3>
        <p className="text-white-1 type-body-1">{email}</p>
      </div>
    </div>
  );
};

//propTypes
ContactInfoPanel.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  addressTitle: PropTypes.string,
  address: PropTypes.string,
  phoneTitle: PropTypes.string,
  phoneNumbers: PropTypes.arrayOf(PropTypes.string),
  emailTitle: PropTypes.string,
  email: PropTypes.string,
};

export default ContactInfoPanel;

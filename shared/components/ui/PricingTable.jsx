"use client";

import React, { useEffect, useState, useId } from "react";
import PropTypes from "prop-types";
import { Check, CircleAlert } from "lucide-react";
import { cn } from "@/shared/utils/cn";

/**
 * SoonBadge component - indicates upcoming feature
 */
function SoonBadge() {
  return (
    <mark className="inline-flex items-center justify-center bg-[#C5DB0033] text-yellow-1 px-2 py-0.5 rounded-sm type-captions-2">
      بزودی
    </mark>
  );
}

/**
 * NewBadge component - indicates new feature
 */
function NewBadge() {
  return (
    <mark className="inline-flex items-center justify-center bg-[#E93D4133] text-error-1 px-2 py-0.5 rounded-sm type-captions-2">
      جدید
    </mark>
  );
}

function PricingTable({
  data,
  title,
  className = "",
  activeColumn,
  columnCount = 4,
}) {
  const tableId = useId();
  const [openDescRow, setOpenDescRow] = useState(null);

  const toggleDesc = (rowIndex) => {
    setOpenDescRow((prev) => (prev === rowIndex ? null : rowIndex));
  };

  useEffect(() => {
    const closeOnScroll = () => setOpenDescRow(null);
    window.addEventListener("scroll", closeOnScroll, true);
    return () => window.removeEventListener("scroll", closeOnScroll, true);
  }, []);

  const columnsArray = Array.from({ length: columnCount });

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Version */}
      <section
        className="hidden desktop:block w-full"
        aria-labelledby={`${tableId}-title`}
      >
        <h3
          id={`${tableId}-title`}
          className="type-subtitle-1 text-white text-right mb-3 pr-6 mt-10"
        >
          {title}
        </h3>

        {/* Comparison Table */}
        <table
          className="w-full flex flex-col border-collapse"
          role="table"
          aria-label={`${title} comparison table`}
        >
          <tbody className="w-full" role="rowgroup">
            {data.map((item, rowIndex) => {
              const { label, isNew, isSoon, description } = item.row;

              return (
                <tr
                  key={rowIndex}
                  className="flex w-full items-stretch"
                  role="row"
                >
                  {/* Feature Label Column */}
                  <th
                    scope="row"
                    className="shrink-0 w-82 flex font-normal text-right"
                  >
                    <div
                      className={cn(
                        "flex items-center gap-2 px-3 py-4 w-full border-t border-dashed border-white-7 min-h-13.25",
                        rowIndex === data.length - 1 &&
                          "border-b border-b-white-7",
                      )}
                    >
                      <span className="type-captions text-white-1">
                        {label}
                      </span>
                      {isNew && <NewBadge />}
                      {isSoon && <SoonBadge />}

                      {description && (
                        <div className="relative group">
                          <button
                            type="button"
                            aria-label={`More info about ${label}`}
                            className="cursor-pointer"
                          >
                            <CircleAlert
                              className="text-white-5 w-5 h-5"
                              aria-hidden="true"
                            />
                          </button>
                          <div
                            role="tooltip"
                            className={cn(
                              "invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300",
                              "absolute z-100 bottom-full mb-3 p-6 rounded-xl bg-teritary-3 shadow-[-41px_34px_40px_0px_#0000003D] pointer-events-none",
                              "right-0 w-82",
                              "min-[1400px]:left-1/2 min-[1400px]:right-auto min-[1400px]:-translate-x-1/2 min-[1400px]:w-90",
                            )}
                          >
                            <p className="text-white-1 type-body-3 text-right">
                              {description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </th>

                  {/* Value Columns */}
                  <td className="flex flex-1 items-stretch p-0" role="cell">
                    <div className="flex flex-1 items-stretch">
                      {columnsArray.map((_, valIndex) => {
                        const val = item.values?.[valIndex];

                        return (
                          <div
                            key={valIndex}
                            className={cn(
                              "flex-1 flex items-center justify-center p-2 min-h-13.25 border-t border-r border-dashed border-t-[#143F49] border-r-[#143F49]",
                              valIndex === columnCount - 1 &&
                                "border-l border-l-[#143F49]",
                              rowIndex === data.length - 1 &&
                                "border-b border-b-[#143F49]",
                              activeColumn === valIndex &&
                                "bg-primary-2 bg-opacity-20",
                            )}
                            style={{
                              borderRightStyle: "solid",
                              borderLeftStyle:
                                valIndex === columnCount - 1 ? "solid" : "none",
                              borderBottomStyle:
                                rowIndex === data.length - 1
                                  ? "dashed"
                                  : "none",
                            }}
                          >
                            {!val && val !== false && val !== 0 ? (
                              <span className="invisible" aria-hidden="true">
                                -
                              </span>
                            ) : val === "soon" ? (
                              <SoonBadge />
                            ) : typeof val === "boolean" ? (
                              val ? (
                                <Check
                                  className={cn(
                                    "w-7 h-7 transition-colors duration-300",
                                    activeColumn === valIndex
                                      ? "text-primary-1"
                                      : "text-white",
                                  )}
                                  aria-label="Included"
                                />
                              ) : (
                                <span className="sr-only">Not included</span>
                              )
                            ) : (
                              <span className="type-body-2 text-white text-center break-word w-full">
                                {val}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* Mobile Version */}
      <section
        className="desktop:hidden w-full pt-5 pb-5 px-4 flex flex-col gap-3 items-center mx-auto"
        aria-label={`${title} features`}
      >
        <h3 className="type-subtitle-1 text-white text-right w-82">{title}</h3>

        <div className="flex flex-col w-82 items-center" role="list">
          {data.map((item, rowIndex) => {
            const { label, isNew, isSoon, description } = item.row;

            return (
              <article
                key={rowIndex}
                className="w-82 flex flex-col"
                aria-label={`Feature: ${label}`}
              >
                {/* Feature Header */}
                <header className="relative max-w-82 min-h-11.25 bg-teritary-3 flex items-center gap-2 px-3 py-2">
                  <h4 className="text-white-1 type-subtitle-1 text-right m-0">
                    {label}
                  </h4>

                  {description && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDesc(rowIndex);
                        }}
                        className="shrink-0"
                        aria-label={`Show description for ${label}`}
                        aria-expanded={openDescRow === rowIndex}
                      >
                        <CircleAlert
                          className="text-white-5 w-5 h-5 cursor-pointer text-center relative"
                          aria-hidden="true"
                        />
                      </button>

                      {openDescRow === rowIndex && (
                        <button
                          type="button"
                          className="fixed inset-0 z-40 cursor-default"
                          onClick={() => setOpenDescRow(null)}
                          aria-label="Close description"
                        />
                      )}

                      <div
                        role="tooltip"
                        aria-hidden={openDescRow !== rowIndex}
                        className={cn(
                          "absolute z-100 bottom-full mb-3 inset-x-4 mx-auto",
                          "rounded-xl bg-teritary-3 shadow-[-41px_34px_40px_0px_#0000003D]",
                          "p-3",
                          "max-w-[320px] w-[calc(100%-2rem)]",
                          "transition-all duration-200",
                          openDescRow === rowIndex
                            ? "visible opacity-100 translate-y-0"
                            : "invisible opacity-0 translate-y-1 pointer-events-none",
                        )}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <p className="text-white-1 type-body-3 text-right">
                          {description}
                        </p>
                      </div>
                    </>
                  )}

                  {isNew && <NewBadge />}
                  {isSoon && <SoonBadge />}
                </header>

                {/* Feature Values */}
                <div
                  className="flex w-82 min-h-17 items-stretch"
                  role="list"
                  aria-label="Plan values"
                >
                  {columnsArray.map((_, valIndex) => {
                    const val = item.values?.[valIndex];

                    return (
                      <div
                        key={valIndex}
                        role="listitem"
                        className={cn(
                          "relative flex-1 flex items-center justify-center px-1 py-2",
                          activeColumn === valIndex &&
                            "bg-primary-2 bg-opacity-20",
                        )}
                      >
                        {valIndex !== 0 && (
                          <div
                            className="absolute right-0 w-px h-1/2 bg-white-7 top-1/2 -translate-y-1/2"
                            aria-hidden="true"
                            role="presentation"
                          />
                        )}

                        {!val && val !== false && val !== 0 ? (
                          <span className="sr-only">Not available</span>
                        ) : val === "soon" ? (
                          <SoonBadge />
                        ) : typeof val === "boolean" ? (
                          val ? (
                            <Check
                              className={cn(
                                "w-6 h-6 transition-colors duration-300",
                                activeColumn === valIndex
                                  ? "text-primary-1"
                                  : "text-white",
                              )}
                              aria-label="Included"
                            />
                          ) : (
                            <span className="sr-only">Not included</span>
                          )
                        ) : (
                          <div className="flex flex-col items-center justify-center w-full">
                            <span className="text-center text-white type-captions-2 w-full">
                              {val}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

PricingTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      row: PropTypes.shape({
        label: PropTypes.string.isRequired,
        isNew: PropTypes.bool,
        isSoon: PropTypes.bool,
        description: PropTypes.string,
      }).isRequired,
      values: PropTypes.array.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  activeColumn: PropTypes.number,
  columnCount: PropTypes.number,
};

PricingTable.defaultProps = {
  title: "",
  className: "",
  activeColumn: undefined,
  columnCount: 4,
};

export default PricingTable;

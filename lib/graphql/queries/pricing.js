export const GET_PRICING_PAGE = `
  query GetPricingPage {
    pages(where: { search: "قیمت گذاری" }) {
      nodes {
        databaseId
        title
        slug
        pricingPageOutlet {
          pricingpageoutlet {
            __typename
            ... on PricingPageOutletPricingpageoutletHeroSectionLayout {
              herotagline
              herotitle
              herodescription
            }
            ... on PricingPageOutletPricingpageoutletPromoBannerSectionLayout {
              promobannertext
            }
            ... on PricingPageOutletPricingpageoutletPricingPlanSectionLayout {
              pricingcard {
                pricingcardid
                pricingcardplanname
                pricingcarddescription
                pricingcardPrice
                pricingcardpriceunit
                pricingcardbuttontext
                pricingcardfeaturetitle
                pricingcardfeatures {
                  featurestext
                }
                pricingcardisrecommended
              }
            }
            ... on PricingPageOutletPricingpageoutletContactCTASectionLayout {
              contactctatitle
              contactctadescription
              contactctabuttontext
            }
            ... on PricingPageOutletPricingpageoutletPricingComparisonSectionLayout {
              pricingcomparisontitle
              pricingcomparisonsubtitle
              pricingcomparisonplans {
                planId
                planname
                planprice
                planbuttontext
                planishighlighted
              }
              pricingtable {
                pricingtabletitle
                pricingtabledata {
                  datarow {
                    rowlable
                    rowisnew
                    rowtooltip
                  }
                  datavalues {
                    valuestype
                    valuescheck
                    valuesdescription
                    valuessoon
                  }
                }
              }
            }
            ... on PricingPageOutletPricingpageoutletCallToActionSectionLayout {
              calltoactiontagline
              calltoactiontitle
              calltoactionbuttontext
              calltoactionimage {
                node {
                  sourceUrl
                }
              }
              calltoactionimagealt
            }
            ... on PricingPageOutletPricingpageoutletFaqSectionLayout {
              faqssubtitle
              faqstitle
              faqs {
                faq {
                  nodes {
                    ... on Faq {
                      id
                      faqFields {
                        faqQuestion
                        faqanswer
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

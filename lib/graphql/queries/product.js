export const GET_SINGLE_PRODUCT = `
  query GetSingleProduct($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      databaseId
      title
      slug
      productsPageOutlet {
        productspageoutlet {
          __typename
          ... on ProductsPageOutletProductspageoutletHeroSectionLayout {
            herotagline
            herotitle
            heroDescription
            heroprimarybuttontext
            herosecondarybuttontext
            heroimage {
              imagesrc {
                node {
                  sourceUrl
                }
              }
              imagealt
              imagePosition
            }
          }
          ... on ProductsPageOutletProductspageoutletProductFeatureSectionLayout {
            productfeaturetitle
            productfeature {
              featuresrc {
                node {
                  sourceUrl
                }
              }
              featuretitle
              featuredescription
            }
          }
          ... on ProductsPageOutletProductspageoutletIntegrationSectionLayout {
            integrationsubtitle
            integrationtitleline1 {
              titleline1before
              titleline1hightlight
              titleline1after
            }
            integrationtitleline2 {
              titleline2before
              titleline2highlight
              titleline2after
            }
            integrationlinktext
            integrationplatforms {
              platformicon {
                node {
                  sourceUrl
                }
              }
              platformalt
            }
          }
          ... on ProductsPageOutletProductspageoutletFeatureSectionLayout {
            featuretagline
            featuretitle
            featuredescription
            featurebuttontext
            featuremedia {
              mediatype
              mediasrc {
                node {
                  sourceUrl
                }
              }
              mediaalt
              mediaPosition
            }
          }
          ... on ProductsPageOutletProductspageoutletHeroSliderSectionLayout {
            herosliderslides {
              slidestitle
              slidesdescription
              slidesimage {
                node {
                  sourceUrl
                }
              }
            }
          }
          ... on ProductsPageOutletProductspageoutletCarouselTargetAudienceSectionLayout {
            carouseltargetaudiencetitle
            carouseltargetaudiencedescription
            targetaudiencecards {
              cardsrc {
                node {
                  sourceUrl
                }
              }
              cardtitle
              cardDescription
            }
          }
          ... on ProductsPageOutletProductspageoutletTrustedBySectionLayout {
            trustedbytitlepart1
            trustedbytitlepart2
            trustedbylogos {
              logosicon {
                node {
                  sourceUrl
                }
              }
              logosalt
            }
          }
          ... on ProductsPageOutletProductspageoutletFeatureCardSectionLayout {
            featurecardheadertitle
            featurecardheaderdescription
            featurecards {
              cardicon
              cardtitle
              carddescription
            }
          }
          ... on ProductsPageOutletProductspageoutletProjectsShowcaseSectionLayout {
            projectsshowcasetitle
            projectsshowcaseviewtext
            projectsshowcaseItems {
              itemssrc {
                node {
                  sourceUrl
                }
              }
              itemstitle
              itemsdescription
            }
          }
          ... on ProductsPageOutletProductspageoutletTestimonialsSectionLayout {
            testimonialsheadertitle
            testimonialsheadersubtitle
            testimonialscard {
              testemonialname
              testimonialrole
              testimonialavatarsrc {
                node {
                  sourceUrl
                }
              }
              testimonialcomment
            }
            testimonialsnumber
          }
          ... on ProductsPageOutletProductspageoutletFaqSectionLayout {
            faqsubtitle
            faqtitle
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
          ... on ProductsPageOutletProductspageoutletCallToActionSectionLayout {
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
        }
      }
    }
  }
`;

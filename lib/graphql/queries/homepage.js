export const GET_HOMEPAGE = `
  query GetHomePage {
    pages(where: { search: "صفحه اصلی" }) {
      nodes {
        databaseId
        title
        slug
        homePageOutlet {
          homepageoutlet {
            __typename
            ... on HomePageOutletHomepageoutletHeroSectionLayout {
              herotagline
              herotitle
              heroDescription
              heroprimarybutton
              herosecondarybutton
            }
            ... on HomePageOutletHomepageoutletImageSectionLayout {
              imagesrc {
                node {
                  sourceUrl
                }
              }
              imagealt
            }
            ... on HomePageOutletHomepageoutletTrustedBySectionLayout {
              trustedbytitlepart1
              trustedbytitlepart2
              trustedbylogos {
                logosalt
                logosicon {
                  node {
                    sourceUrl
                  }
                }
              }
            }
            ... on HomePageOutletHomepageoutletHeroSliderSectionLayout {
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
            ... on HomePageOutletHomepageoutletServiceSectionLayout {
              serviceheadertitle
              serviceheaderdescription
              servicecards {
                servicecard {
                  nodes {
                    ... on Product {
                      id
                      title
                      slug
                      servicecardFields {
                        servicecardtitle
                        servicecarddescription
                        servicecardicon
                        servicecardiconcolor
                        servicecardbuttontext
                      }
                    }
                  }
                }
              }
            }
            ... on HomePageOutletHomepageoutletFeatureSectionLayout {
              featuretagine
              featuretitle
              featuredescription
              featurebuttontext
              featuremedia {
                mediaType
                mediaimage {
                  node {
                    sourceUrl
                  }
                }
                mediaalt
                mediaPosition
              }
            }
            ... on HomePageOutletHomepageoutletTestimonialsSectionLayout {
              testimonialsheadertitle
              testimonialsheadersubtitle
              testimonialsnumber
              testimonialscard {
                testemonialname
                testimonialrole
                testimonialAvatarsrc {
                  node {
                    sourceUrl
                  }
                }
                testimonialcomment
              }
            }
          }
        }
      }
    }
  }
`;

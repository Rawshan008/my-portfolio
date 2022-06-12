import { useState } from "react";
import Layout from "../../components/layout";
import SiteTitle from "../../components/site-title";

import { gql } from "@apollo/client";
import client from "../api/apollo-client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Portfolio = ({ portfolioPage }) => {
  const [item, setItem] = useState(portfolioPage);

  const filterItem = (catItem) => {
    const updatedItem = portfolioPage.filter((catSlug) => {
      return catSlug?.node?.portfolioFields?.category === catItem;
    });

    if ("all" === catItem) {
      setItem(portfolioPage);
    } else {
      setItem(updatedItem);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="mx-auto py-10">
        <SiteTitle title="Portfolio" />
        <div className="flex mt-4">
          <button
            onClick={() => filterItem("all")}
            className="inline-block py-2 px-5 bg-base-color text-white mr-4 transition-all duration-300 hover:bg-body-color rounded-sm font-dosis font-medium tracking-wider uppercase"
          >
            All
          </button>

          {portfolioPage.map((elem, index) => {
            return (
              <button
                key={index}
                onClick={() =>
                  filterItem(elem?.node?.portfolioFields?.category)
                }
                className="inline-block py-2 px-5 bg-base-color text-white mr-4 transition-all duration-300 hover:bg-body-color rounded-sm font-dosis font-medium tracking-wider uppercase"
              >
                {elem?.node?.portfolioFields?.category}
              </button>
            );
          })}
        </div>
        <div className="flex flex-wrap -mx-4">
          {item.map((portfolio, index) => {
            console.log(portfolio?.node?.featuredImage?.node?.sourceUrl);
            return (
              <div key={index} className="w-1/2 p-4">
                <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="h-56 w-full relative">
                    <Image
                      src={portfolio?.node?.featuredImage?.node?.sourceUrl}
                      layout="fill"
                      className="rounded-t-lg"
                    />
                  </div>

                  <div className="p-5">
                    <Link href={`portfolio/${portfolio?.node?.slug}`}>
                      <a>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight font-dosis text-body-color">
                          {portfolio?.node?.title}
                        </h5>
                      </a>
                    </Link>
                    <div
                      className="mb-3 font-normal text-body-color font-bitter font-normal"
                      dangerouslySetInnerHTML={{
                        __html: portfolio?.node?.excerpt,
                      }}
                    ></div>
                    <Link href={`portfolio/${portfolio?.node?.slug}`}>
                      <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-base-color rounded-sm hover:bg-body-color focus:outline-none transition-all duration-300 font-bitter">
                        Read more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Pages {
        portfolios {
          edges {
            node {
              content
              excerpt
              title
              slug
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              portfolioFields {
                category
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      portfolioPage: data?.portfolios?.edges,
    },
  };
};

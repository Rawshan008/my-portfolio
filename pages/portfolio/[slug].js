import { gql } from "@apollo/client";
import client from "../api/apollo-client";
import Head from "next/head";
import Layout from "../../components/layout";
import Image from "next/image";

const SinglePortfolio = ({ portfolio }) => {
  console.log(portfolio);
  return (
    <Layout>
      <Head>
        <title>{portfolio?.title}</title>
      </Head>

      <div className="single-portfolio py-10">
        <h2 className="font-bold font-bitter text-xl text-body-color">
          {portfolio?.title}
        </h2>
        <div className="relative w-full h-[450px] img-wrapper">
          <Image
            src={portfolio?.featuredImage?.node?.sourceUrl}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="portfolio-description mb-8"
          dangerouslySetInnerHTML={{ __html: portfolio?.content }}
        ></div>

        {portfolio?.portfolioFields?.projectLinks.map((btn, index) => {
          return (
            <a
              className="inline-block py-2 px-5 bg-base-color text-white mr-4 transition-all duration-300 hover:bg-body-color rounded-sm font-dosis font-medium tracking-wider uppercase"
              key={index}
              href={btn?.buttonLink}
            >
              {btn?.buttonText}
            </a>
          );
        })}
      </div>
    </Layout>
  );
};

export default SinglePortfolio;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query Pages {
        portfolios {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  });

  const paths = data?.portfolios?.edges.map((item) => {
    return {
      params: {
        slug: item.node.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const { data } = await client.query({
    query: gql`
      query SinglePortfolio($slug: String) {
        portfolioBy(slug: $slug) {
          title
          content
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          portfolioFields {
            projectLinks {
              buttonLink
              buttonText
            }
          }
        }
      }
    `,
    variables: { slug: slug },
  });

  return {
    props: {
      portfolio: data?.portfolioBy,
    },
  };
};

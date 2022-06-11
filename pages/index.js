import HomeBanner from "../components/home-barner";
import Layout from "../components/layout";
import { gql } from "@apollo/client";
import client from "./api/apollo-client";
import Head from "next/head";

export default function Home({ home }) {
  const { title, content, homePage } = home;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <HomeBanner
        title={homePage.name}
        subtitle={homePage.designation}
        description={content}
      />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Pages {
        page(id: "13", idType: DATABASE_ID) {
          title
          content
          homePage {
            name
            designation
          }
        }
      }
    `,
  });

  return {
    props: {
      home: data?.page,
    },
  };
};

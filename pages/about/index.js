import HomeBanner from "../../components/home-barner";
import Layout from "../../components/layout";
import SiteTitle from "../../components/site-title";
import Skills from "../../components/skills";
import { gql } from "@apollo/client";
import client from "../api/apollo-client";
import Head from "next/head";

const About = ({ aboutPage }) => {
  const { title, content, about } = aboutPage;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <HomeBanner
        title=""
        subtitle={about.aboutHeading}
        description={content}
      />

      <div className="flex flex-wrap mb-10">
        {about.skills.map((item, index) => {
          return (
            <div key={index} className="w-1/2 mb-5">
              <SiteTitle title={item.skillTitle} />

              {item.skillNameGroup.map((skill, index) => (
                <Skills key={index} title={skill.skillName} />
              ))}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default About;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Pages {
        page(id: "21", idType: DATABASE_ID) {
          title
          content
          about {
            aboutHeading
            skills {
              skillTitle
              skillNameGroup {
                skillName
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      aboutPage: data?.page,
    },
  };
};

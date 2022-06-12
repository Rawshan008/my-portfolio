import ContactForm from "../../components/contact-form";
import ContactIcon from "../../components/contact-iocn";
import Layout from "../../components/layout";
import SiteTitle from "../../components/site-title";
import { gql } from "@apollo/client";
import client from "../api/apollo-client";
import Head from "next/head";

const Contact = ({ contactPage }) => {
  const { title, contact } = contactPage;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="py-10">
        <SiteTitle title={contact?.title} />
        <ContactForm />
        <ContactIcon
          linkedin={contact?.socialLinks?.linkedin}
          github={contact?.socialLinks?.github}
          mail={contact?.socialLinks?.mail}
        />
      </div>
    </Layout>
  );
};

export default Contact;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Pages {
        page(id: "44", idType: DATABASE_ID) {
          title
          contact {
            title
            socialLinks {
              github
              linkedin
              mail
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      contactPage: data?.page,
    },
  };
};

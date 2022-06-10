import ContactForm from "../../components/contact-form";
import ContactIcon from "../../components/contact-iocn";
import Layout from "../../components/layout";
import SiteTitle from "../../components/site-title";

const Contact = () => {
  return (
    <Layout>
      <div className="py-10">
        <SiteTitle title="Contact Me" />
        <ContactForm />
        <ContactIcon linkedin="#" github="#" mail="#" />
      </div>
    </Layout>
  );
};

export default Contact;

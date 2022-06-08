import HomeBanner from "../../components/home-barner";
import Layout from "../../components/layout";
import SiteTitle from "../../components/site-title";
import Skills from "../../components/skills";

const About = () => {
  return (
    <Layout>
      <HomeBanner
        title=""
        subtitle="Hi,"
        description="If you are wandering i'm the character of a English Movie. I am not I am a real person with name Md. Rawshan Ali. I am a WordPress Theme and plugin developer and React Front-end Developer. I build ton of website for portfolio, Enterprice, agency, and Woocommerce level. I am also work as a backend and Frontend develoer for Headless wordpress Website. I using git for all code version control with modern system. My personal interests are Traveling, Natural Photography, and watching movies. if you want to know about my knowledge please click all of my portfolio links. Thanks"
      />

      <div className="flex flex-wrap mb-10">
        <div className="w-1/2">
          <SiteTitle title="FrontEnd" />
          <Skills title="HTML5" />
          <Skills title="CSS3" />
          <Skills title="Javascript" />
          <Skills title="PHP" />
        </div>
        <div className="w-1/2">
          <SiteTitle title="FrontEnd" />
          <Skills title="HTML5" />
          <Skills title="CSS3" />
          <Skills title="Javascript" />
          <Skills title="PHP" />
        </div>
        <div className="w-1/2">
          <SiteTitle title="FrontEnd" />
          <Skills title="HTML5" />
          <Skills title="CSS3" />
          <Skills title="Javascript" />
          <Skills title="PHP" />
        </div>
        <div className="w-1/2">
          <SiteTitle title="FrontEnd" />
          <Skills title="HTML5" />
          <Skills title="CSS3" />
          <Skills title="Javascript" />
          <Skills title="PHP" />
        </div>

        <div className="w-1/2">
          <SiteTitle title="FrontEnd" />
          <Skills title="HTML5" />
          <Skills title="CSS3" />
          <Skills title="Javascript" />
          <Skills title="PHP" />
        </div>
      </div>
    </Layout>
  );
};

export default About;

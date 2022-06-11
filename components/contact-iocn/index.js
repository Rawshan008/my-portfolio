import Linkedin from "../../public/icons/linkedin.svg";
import Github from "../../public/icons/github.svg";
import Mail from "../../public/icons/mail.svg";
const ContactIcon = (props) => {
  const { linkedin, github, mail } = props;
  return (
    <div className="flex">
      {linkedin && (
        <a
          href={linkedin}
          className="h-10 w-10 bg-base-color flex items-center justify-center rounded-full transition-all duration-300 hover:bg-body-color mr-3"
        >
          <Linkedin width="20" height="20" fill="#ffffff" />
        </a>
      )}

      {github && (
        <a
          href={github}
          className="h-10 w-10 bg-base-color flex items-center justify-center rounded-full transition-all duration-300 hover:bg-body-color mr-3"
        >
          <Github width="20" height="20" fill="#ffffff" />
        </a>
      )}

      {mail && (
        <a
          href={`mailto:${mail}`}
          className="h-10 w-10 bg-base-color flex items-center justify-center rounded-full transition-all duration-300 hover:bg-body-color mr-3"
        >
          <Mail width="20" height="20" fill="#ffffff" />
        </a>
      )}
    </div>
  );
};

export default ContactIcon;

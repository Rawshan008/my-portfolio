import Link from "next/link";

const FooterTop = () => {
  return (
    <div className="py-3">
      <ul>
        <li>
          <Link href="/">
            <a className="font-dosis font-bold text-body-color text-xl uppercase letter tracking-widest flex items-center justify-start">
              <span className="ml-2">Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="font-dosis font-bold text-body-color text-xl uppercase letter tracking-widest flex items-center justify-start">
              <span className="ml-2">About</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="font-dosis font-bold text-body-color text-xl uppercase letter tracking-widest flex items-center justify-start">
              <span className="ml-2">Contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterTop;

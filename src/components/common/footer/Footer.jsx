import logo from "../../../assets/logo.svg";
import SocialMedia from "../socialMedia/SocialMedia";

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-16 md:pt-24 pb-8 pe-20 sm:pe-24 content max-2xl:px-3">
      <div className="flex max-md:flex-col gap-6 justify-between items-center w-full text-neutral-200">
        <a href="#" className="flex items-center border-0">
          <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Satish Kumar
          </p>
        </a>
        <div className="flex gap-1">
          <SocialMedia />
        </div>
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear} Satish Kumar Dhinakaran.
        </p>
      </div>
    </div>
  );
};

export default Footer;

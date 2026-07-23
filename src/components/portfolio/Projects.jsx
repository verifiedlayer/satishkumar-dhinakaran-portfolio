import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="max-w-106 rounded-xl bg-white hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 h-full overflow-hidden">
      <div className="h-0.5" style={{ backgroundColor: data?.accent }} />
      <div className="p-5 xs:p-8">
        <span className="inline-block bg-[#EDD8FF80] text-picto-primary text-xs font-semibold rounded-full px-3 py-1.5 mb-4">
          {data?.category}
        </span>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>
        {data?.link && (
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
          >
            Visit Site
            <span className="ms-1 xs:ms-3">
              <FontAwesomeIcon icon={faArrowRight} size="l" className="" />
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;

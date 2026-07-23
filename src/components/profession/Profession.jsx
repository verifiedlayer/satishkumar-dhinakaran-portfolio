import { Link as ScrollLink } from "react-scroll";
import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "AI Trust Infrastructure",
    description:
      "I design the Signal Engine behind VerifiedLayer — aggregating real-time sentiment, technical credibility, and cryptographic reputation into machine-readable trust scores LLMs can cite.",
  },
  {
    id: 2,
    title: "GEO & AI Visibility Strategy",
    description:
      "I build the entity optimization and LLM trust signal architectures that determine how software gets discovered, evaluated, and recommended by ChatGPT, Perplexity, Gemini, and Claude.",
  },
  {
    id: 3,
    title: "Venture Building & Distribution",
    description:
      "From Valid8 to Geogle.ai, I take ventures from zero to enterprise scale — combining institutional distribution with hands-on product design.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            AI platforms now process trillions in software purchasing
            decisions, yet most citations are guesswork. I build the
            infrastructure that fixes that.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach blends institutional distribution, AI product design,
            and deep GEO domain knowledge to turn trust into a machine-readable
            signal.
          </p>
        </div>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;

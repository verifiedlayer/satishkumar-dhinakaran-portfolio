import Projects from "./Projects";

const projectData = [
  {
    id: 1,
    category: "2026 · CO-FOUNDER & CBO",
    title: "VerifiedLayer.ai",
    description:
      "The API-first trust infrastructure that powers how LLMs cite, evaluate, and recommend software — replacing unverified review sites with a machine-readable Signal Engine.",
    link: "https://verifiedlayer.ai",
    accent: "#9929fb",
  },
  {
    id: 2,
    category: "2025–PRESENT · CO-FOUNDER & CBO",
    title: "Geogle.ai",
    description:
      "LLM visibility and search intelligence engine. Scaled to 27 enterprise clients and a $2M target valuation, designing entity optimization and LLM trust signal architectures.",
    link: "https://geogle.ai",
    accent: "#2563eb",
  },
  {
    id: 3,
    category: "2024–2025 · CEO",
    title: "GETO.ai",
    description:
      "AI interview and training platform. Built and shipped 50+ AI products across 10+ countries, driving programmatic SEO and competitive intelligence.",
    link: null,
    accent: "#059669",
  },
  {
    id: 4,
    category: "2018–2022 · FOUNDER & CEO",
    title: "Zyena Technologies",
    description:
      "Enterprise digital transformation across Southeast Asia, delivering custom systems for clients including Maxis Communications and Dr. Ko Skin Specialist Clinics.",
    link: null,
    accent: "#d97706",
  },
  {
    id: 5,
    category: "2016–2018 · FOUNDER",
    title: "Valid8",
    description:
      "Malaysia's first blockchain verification system — an academic certificate verification platform built on IBM Bluemix for Universiti Malaysia Pahang, three years ahead of enterprise blockchain adoption.",
    link: null,
    accent: "#0d9488",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Founder Trajectory</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Five ventures, one thread — building the trust and visibility
            infrastructure the AI era needs.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

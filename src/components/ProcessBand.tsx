export default function ProcessBand() {
  const steps = [
    {
      num: "01",
      title: "Research & Strategy",
      desc: "We deep dive into your business model, target audience, and engineering constraints to establish a clear architectural plan."
    },
    {
      num: "02",
      title: "Interface Design",
      desc: "Translating insights into interactive, white-dominant editorial interfaces with micro-interactions and stunning mockup layouts."
    },
    {
      num: "03",
      title: "Frontend Engineering",
      desc: "Writing clean, semantically correct React and Tailwind CSS v4 code configured with smooth scrolling and animations."
    },
    {
      num: "04",
      title: "Optimization & Audit",
      desc: "Conducting extensive performance tuning to guarantee fast load times, pristine visual ratios, and search engine optimization."
    }
  ];

  return (
    <section id="process" className="w-full bg-surface-dark text-white py-32 px-6">
      <div className="w-full max-w-[1024px] mx-auto flex flex-col items-start text-left">
        <h2 className="headline-md font-geist font-normal text-white">
          Our Process
        </h2>
        <div className="w-full border-t border-neutral-800 my-8" />
        
        <div className="flex flex-col gap-12 mt-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
              <span className="text-[13px] font-bold text-accent-amber font-inter leading-none pt-1">
                {step.num}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold font-geist text-white">
                  {step.title}
                </h3>
                <p className="text-[14px] text-text-secondary font-geist leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

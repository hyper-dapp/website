const Section = ({ title, subtitle, description, img, reverse = false }) => {
  const reverseRowStyle = reverse ? "sm:flex-row-reverse" : "sm:flex-row";

  return (
    <div className={`flex flex-col items-center gap-10 ${reverseRowStyle}`}>
      {img && (
        <div className="flex flex-col flex-1 justify-center items-center w-3/4 sm:w-1/4">
          <img className={`object-scale-down`} src={img} alt="img_section" />
        </div>
      )}
      <div className="flex flex-col gap-4 justify-center w-full sm:w-3/4">
        <span className="text-4xl sm:text-5xl">{title}</span>
        <span className="text-3xl sm:text-4xl text-[#07c8d6]">{subtitle}</span>
        <p className="text-2xl sm:text-3xl">{description}</p>
      </div>
    </div>
  );
};

export default Section;

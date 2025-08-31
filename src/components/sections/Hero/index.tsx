interface HeroProps {
  image?: string;
  title?: string;
  description?: string;
}

export const Hero = ({ image, title, description }: HeroProps) => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

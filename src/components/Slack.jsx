import React from "react";
import astroLogo from "../assets/logo/astro.svg";
import reactLogo from "../assets/logo/react.svg";
import vercelLogo from "../assets/logo/vercel.svg";
import tailwindLogo from "../assets/logo/tailwindcss.svg";
import typescriptLogo from "../assets/logo/typescript.svg";
import openaiLogo from "../assets/logo/openai_dark.svg";
import "./Slack.css"; // Asegúrate de crear este archivo CSS para las animaciones

const Slack = () => {
  const logos = [
    { src: astroLogo, alt: "AstroJS Logo" },
    { src: reactLogo, alt: "ReactJS Logo" },
    { src: vercelLogo, alt: "Vercel Logo" },
    { src: tailwindLogo, alt: "TailwindCSS Logo" },
    { src: typescriptLogo, alt: "TypeScript Logo" },
    { src: openaiLogo, alt: "OpenAI Logo" },
  ];

  return (
    <section className="bg-gray-600 relative w-full text-center flex flex-col justify-center items-center gap-5 px-4 py-20 sm:py-24 pointer-events-none">
      <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-primary via-foreground to-foreground">
        Top Technologies I Use Everyday
      </h2>
      <p className="text-white text-muted-foreground sm:text-lg md:text-xl font-light tracking-tighter">
        Best tools to deliver the best results.
      </p>

      <div className="w-full h-fit max-w-xl flex flex-col justify-center select-none overflow-hidden gradient">
        <div className="animate-slide-logos">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-16 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slack;

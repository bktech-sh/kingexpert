import Image from "next/image";

import { DESCRIPTION, TITLE } from "@/app/constants";

const HeroSection = () => {
  return (
    <div className="flex w-screen justify-center items-start py-36 gap-20 h-5/6">
      <div
        className="flex flex-col justify-center gap-10"
        style={{ maxWidth: "500px" }}
      >
        <div className="flex flex-col gap-9">
          <h1 className="text-black text-5xl font-inter font-bold">{TITLE}</h1>
          <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
            {DESCRIPTION}
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 p-3 px-7 rounded-xl bg-dark text-white w-fit text-sm">
          Konsultasi Sekarang
        </button>
      </div>

      <Image
        src="/images/hero-image.png"
        alt="hero-image"
        width={500}
        height={400}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default HeroSection;

import Image from "next/image";

import { DESCRIPTION } from "@/app/constants";

const HeroSection = () => {
  return (
    <div className="flex w-screen justify-center items-center py-36 gap-28 h-5/6">
      <div
        className="flex flex-col justify-center gap-10"
        style={{ maxWidth: "550px" }}
      >
        <div className="flex flex-col gap-9">
          <h1 className="text-black text-5xl font-inter font-bold font-serif">
            Be an <span className="text-mainOrange">Expert</span> and The{" "}
            <span className="text-mainOrange">King</span> of Knowledge
          </h1>
          <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
            {DESCRIPTION}
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 p-3 px-7 rounded-xl bg-dark text-white w-fit text-sm">
          Konsultasi Sekarang
        </button>
      </div>

      <Image
        src="/images/hero-section-image-2.png"
        alt="hero-image"
        width={550}
        height={400}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default HeroSection;

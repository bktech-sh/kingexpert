import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex w-screen justify-center px-24 py-24 align-middle gap-20">
      <div
        className="flex flex-col justify-center gap-10"
        style={{ maxWidth: "500px" }}
      >
        <div className="flex flex-col gap-9">
          <h1 className="text-black text-5xl font-inter font-bold">
            Be an Expert and The King of Knowledge
          </h1>
          <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
            Pelatihan eksklusif untuk dorong prestasi siswa di ajang Kompetisi
            Akademik Nasional hingga Internasional. Jadilah berprestasi dengan
            persiapan intensif didampingi mentor berpengalaman, pembelajaran
            komprehensif, dan materi terkini.
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
        height={500}
      />
    </div>
  );
};

export default HeroSection;

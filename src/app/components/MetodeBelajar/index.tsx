import Image from "next/image";

const MetodeBelajar = () => {
  return (
    <div className="flex flex-col px-40 gap-16">
      <h2 className="font-bold text-4xl font-serif">
        Metode <span className="text-mainOrange">Belajar</span>
      </h2>

      <div className="flex gap-32 px-10">
        <Image
          src="/images/metode.png"
          alt="metode"
          width={500}
          height={200}
          style={{ objectFit: "contain" }}
        />
        <div>
          <p>Pre-Test</p>
          <p>Pembinaan Intensif</p>
          <p>Materi & Paket Soal</p>
          <p>Simulasi</p>
          <p>E-Rapor & E-Sertifikat</p>
        </div>
      </div>
    </div>
  );
};

export default MetodeBelajar;

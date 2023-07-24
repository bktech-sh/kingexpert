import Image from "next/image";

const MobileMainContent = () => {
  return (
    <div className="flex flex-col px-10 py-10 justify-center items-center gap-20">
      <div className="flex flex-col justify-center items-center">
        <div>
          <Image src="/images/ceo-1.png" alt="ceo" width={200} height={200} />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold font-serif text-center">
              Tentang <span className="text-mainOrange">King Expert</span>
            </h3>
            <p className="text-black text-sm font-inter font-normal leading-5 text-justify">
              King Expert adalah lembaga profesional dan berpengalaman di bidang
              pengembangan talenta siswa yang memberikan program pelatihan dan
              kompetisi kepada siswa.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold font-serif text-center">
              Sejarah
            </h3>
            <p className="text-black text-sm font-inter font-normal leading-5 text-justify">
              Lorem ipsum dolor sit amet consectetur. Urna nunc neque nibh sit
              molestie neque viverra egestas. Faucibus tincidunt eleifend
              pretium tortor a hendrerit amet. Maecenas pellentesque sodales
              cursus amet tincidunt hac. Mauris posuere facilisis amet at justo
              lacus. Integer id justo in eget ullamcorper velit fermentum
              ornare. Turpis donec quis egestas eget ac egestas non luctus.
              Fringilla placerat aliquam sed ac. Leo sodales nibh in quam nec.
              Varius maecenas potenti lacus cursus vitae viverra hac pharetra.
              Nullam convallis ipsum curabitur phasellus turpis dolor. In lacus
              ac ut ut tellus maecenas viverra arcu. Viverra
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div>
          <Image src="/images/ceo-2.png" alt="ceo" width={200} height={200} />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold font-serif text-center">Visi</h3>
            <p className="text-black text-sm font-inter font-normal leading-5 text-justify">
              King Expert adalah lembaga profesional dan berpengalaman di bidang
              pengembangan talenta siswa yang memberikan program pelatihan dan
              kompetisi kepada siswa.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold font-serif text-center">Misi</h3>
            <p className="text-black text-sm font-inter font-normal leading-5 text-justify">
              Lorem ipsum dolor sit amet consectetur. Urna nunc neque nibh sit
              molestie neque viverra egestas. Faucibus tincidunt eleifend
              pretium tortor a hendrerit amet. Maecenas pellentesque sodales
              cursus amet tincidunt hac. Mauris posuere facilisis amet at justo
              lacus. Integer id justo in eget ullamcorper velit fermentum
              ornare. Turpis donec quis egestas eget ac egestas non luctus.
              Fringilla placerat aliquam sed ac. Leo sodales nibh in quam nec.
              Varius maecenas potenti lacus cursus vitae viverra hac pharetra.
              Nullam convallis ipsum curabitur phasellus turpis dolor. In lacus
              ac ut ut tellus maecenas viverra arcu. Viverra
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div>
          <Image src="/images/ceo-3.png" alt="ceo" width={200} height={200} />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold font-serif text-center">
              Tutor <span className="text-mainOrange">King Expert</span>
            </h3>
            <p className="text-black text-sm font-inter font-normal leading-5 text-justify">
              King Expert adalah lembaga profesional dan berpengalaman di bidang
              pengembangan talenta siswa yang memberikan program pelatihan dan
              kompetisi kepada siswa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMainContent;

import Image from "next/image";
import React from "react";

const MainContent = () => {
  return (
    <div className="flex flex-col w-screen justify-center items-center gap-28 h-5/6 py-32 px-32">
      <div className="flex gap-20">
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold font-serif">
              Tentang <span className="text-mainOrange">King Expert</span>
            </h3>
            <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
              King Expert adalah lembaga profesional dan berpengalaman di bidang
              pengembangan talenta siswa yang memberikan program pelatihan dan
              kompetisi kepada siswa.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold font-serif">Sejarah</h3>
            <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
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
        <div className="">
          <Image src="/images/ceo-1.png" alt="ceo" width={300} height={300} />
        </div>
      </div>

      <div className="flex gap-20">
        <div className="">
          <Image src="/images/ceo-2.png" alt="ceo" width={300} height={300} />
        </div>
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold font-serif">Visi</h3>
            <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
              King Expert adalah lembaga profesional dan berpengalaman di bidang
              pengembangan talenta siswa yang memberikan program pelatihan dan
              kompetisi kepada siswa.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold font-serif">Misi</h3>
            <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
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

      <div className="flex gap-20">
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold font-serif">
              Tutor <span className="text-mainOrange">King Expert</span>
            </h3>
            <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
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
        <div className="">
          <Image src="/images/ceo-3.png" alt="ceo" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;

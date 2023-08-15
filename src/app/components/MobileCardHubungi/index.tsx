import { handleCallWhatsapp } from "@/app/helpers/openMediaSocial";
import Image from "next/image";

const MobileCardHubungi = () => {
  return (
    <div className="flexpy-3 px-10">
      <div
        className="flex flex-col bg-slate-500 w-full py-10 px-5 items-center justify-center gap-5"
        style={{
          borderRadius: "20px",
          background:
            "linear-gradient(225deg, rgba(0, 112, 108, 0.10) 0%, rgba(255, 130, 15, 0.10) 100%)",
        }}
      >
        <h3 className="text-lg font-bold text-center">
          Mulailah perjalanan belajar Kamu dengan King Expert. Hubungi kami
          sekarang!
        </h3>

        <div className="flex flex-col justify-center items-center gap-4">
          <Image src="/images/sinar-top.svg" width={100} height={100} alt="-" />
          <button
            style={{
              borderRadius: "5px",
              border: "1px solid var(--base-white, #FFF)",
              background:
                "var(--gradient-danger-bg, linear-gradient(225deg, #FFC656 0%, #F16063 100%))",
            }}
            className="text-white font-bold px-8 py-2"
            onClick={handleCallWhatsapp}
          >
            Hubungi King Expert
          </button>
          <Image
            src="/images/sinar-bottom.svg"
            width={100}
            height={100}
            alt="-"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileCardHubungi;

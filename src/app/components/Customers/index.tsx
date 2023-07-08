import Image from "next/image";
import DummyIcon from "./dummy-icon";

const Customers = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-mainGrey py-10 ">
      <div className="flex flex-col items-center text-center gap-2">
        <h2 className="text-3xl font-semibold">Pelanggan Kami</h2>
        <p>
          King Expert sudah dipercaya menjadi tutor untuk ratusan siswa dan
          sekolah dari berbagai sekolah di Indonesia{" "}
        </p>
      </div>

      <div className="flex gap-40 overflow-scroll">
        <DummyIcon />
      </div>
    </div>
  );
};

export default Customers;

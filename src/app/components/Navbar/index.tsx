import Image from "next/image";
import Menu from "./Menu";
import BtnAppointment from "./BtnAppointment";

const Navbar = () => {
  return (
    <div className="flex w-screen justify-between h-20 items-center border-b px-24">
      <Image
        src="/assets/main-logo.png"
        alt="main-logo"
        width={110}
        height={50}
      />
      <Menu />
      <BtnAppointment />
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between h-20 items-center border-b px-24">
      <Image
        src="/images/main-logo.png"
        alt="main-logo"
        width={110}
        height={50}
        className="cursor-pointer"
      />
      <Menu />
      <div />
    </div>
  );
};

export default Navbar;

import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex gap-5">
      <Link className="text-gray-500" href="/about">
        About
      </Link>
      <h4 className="text-gray-500">Pricing</h4>
      <h4 className="text-gray-500">Event</h4>
    </div>
  );
};

export default Menu;

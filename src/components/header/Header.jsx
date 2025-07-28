import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href={"/bookings"}>Show my Bookings</Link>
      </nav>
    </header>
  );
};

export default Header;

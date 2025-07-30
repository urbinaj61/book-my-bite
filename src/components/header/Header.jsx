import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href={"/bookings"}>
          <button>Show my Bookings</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

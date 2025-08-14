import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <Link className="button, home-link" href={"/"}>
          Home
        </Link>
        <Link className="navigation-link" href={"/bookings"}>
          Show my Bookings
        </Link>
        <Link className="navigation-link" href={"/restaurantHome"}>
          Restaurant Data
        </Link>
      </nav>
    </header>
  );
};

export default Header;

import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <Link className="button, home-link" href={"/"}>
          <button type="button" className="navigation-button">
            Home
          </button>
        </Link>
        <Link className="navigation-link" href={"/bookings"}>
          <button type="button" className="navigation-button">
            Show my Bookings
          </button>
        </Link>
        <Link className="navigation-link" href={"/restaurantHome"}>
          <button type="button" className="navigation-button">
            Restaurant Data
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

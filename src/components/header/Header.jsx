import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="navigation">
        <Link className="button show-bookings-button" href={"/bookings"}>
          <button>Show my Bookings</button>
        </Link>
        <Link className="button, home-button" href={"/"}>
          <button>Home</button>
        </Link>
        <Link className="button, login-button" href={"/restaurantHome"}>
          <button>Restaurant Data</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

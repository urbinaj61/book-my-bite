import Link from "next/link";

const Home = () => {
  return (
    <main className="backgroundImage">
      <aside className="landing-page-hero-link-container">
        <Link href={"/restaurants"} className="landing-page-hero-link">
          <button className="landing-page-hero-button">Book My Bite </button>
        </Link>
      </aside>
    </main>
  );
};

export default Home;

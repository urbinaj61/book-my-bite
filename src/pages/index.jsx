import Link from "next/link";

const Home = () => {
  return (
    <main className="backgroundImage">
      <Link href={"/restaurants"}>
        <button className="hero-button">Book My Bite </button>
      </Link>
    </main>
  );
};

export default Home;

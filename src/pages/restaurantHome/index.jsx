import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import GetRestaurantEmail from "@/components/restaurantData/GetRestaurantEmail";

const RestaurantHome = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <>
      <div>
        <h1>Restaurant Login</h1>
        <GetRestaurantEmail setEmail={setEmail} />
        {email && router.push(`/showRestaurantData/${email}`)}
      </div>
      <Link href={"/"}>
        <button>Return</button>
      </Link>
    </>
  );
};

export default RestaurantHome;

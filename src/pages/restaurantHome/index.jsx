import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import GetRestaurantEmail from "@/components/restaurantData/GetRestaurantEmail";

const RestaurantHome = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <section className="bookings-page-container">
      <h2 className="bookings-page-heading">Restaurant Data</h2>
      <GetRestaurantEmail setEmail={setEmail} />
      {email && router.push(`/showRestaurantData/${email}`)}
    </section>
  );
};

export default RestaurantHome;

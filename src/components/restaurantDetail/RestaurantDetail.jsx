import { useRouter } from "next/router";
import Image from "next/image";
import DummyImage from "../dummyImage/DummyImage";

const RestaurantDetail = ({ restaurant }) => {
  const {
    name,
    address1,
    address2,
    postcode,
    city,
    email,
    phone,
    type,
    cuisine,
    images,
    menuLinks,
    openingTimes,
  } = restaurant;
  const router = useRouter();

  return (
    <>
      <div>
        <p>{name}</p>
        <p>{address1}</p>
        <p>{address2}</p>
        <p>{postcode}</p>
        <p>{city}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{type}</p>
        <p>{cuisine}</p>
        {images.length > 0 ? (
          images.map((image) => {
            return (
              <Image
                src={image.imageUrl}
                width={200}
                height={200}
                alt={"no image"}
              />
            );
          })
        ) : (
          <DummyImage />
        )}

        {menuLinks.length > 0
          ? menuLinks.map((menu) => {
              return (
                <>
                  <p>{menu.type}</p>
                  <p>{menu.link}</p>
                </>
              );
            })
          : null}
        {openingTimes.length > 0
          ? openingTimes.map((time) => {
              return (
                <>
                  <p>{time.day}</p>
                  <p>{time.open}</p>
                  <p>{time.close}</p>
                </>
              );
            })
          : null}
      </div>

      <button onClick={() => router.back()}>Return</button>
    </>
  );
};

export default RestaurantDetail;

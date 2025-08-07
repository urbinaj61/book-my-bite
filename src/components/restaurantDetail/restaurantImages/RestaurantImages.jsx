import Image from "next/image";
import DummyImage from "../../dummyImage/DummyImage.jsx";

const RestaurantImages = ({ images }) => {
  const renderedImages =
    images.length > 0 ? (
      images.map((image, i) => {
        return (
          <Image
            className="main-restaurant-details_image"
            key={i}
            src={image.imageUrl}
            width={200}
            height={200}
            alt={"image"}
            priority
          />
        );
      })
    ) : (
      <DummyImage />
    );

  return renderedImages;
};

export default RestaurantImages;

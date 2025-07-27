import Image from "next/image";
import DummyImage from "../../dummyImage/DummyImage.jsx";

const RestaurantImages = ({ images }) => {
  const renderedImages =
    images.length > 0 ? (
      images.map((image) => {
        return (
          <Image src={image.imageUrl} width={200} height={200} alt={"image"} />
        );
      })
    ) : (
      <DummyImage />
    );

  return renderedImages;
};

export default RestaurantImages;

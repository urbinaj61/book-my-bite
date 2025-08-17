import Image from "next/image";

const DummyImage = () => {
  return (
    <>
      <Image
        className="card-image"
        src={"/no-image.png"}
        width={200}
        height={200}
        alt={"no image"}
      />
    </>
  );
};

export default DummyImage;

import Image from "next/image";

const DummyImage = () => {
  return (
    <div>
      <Image src={"/no-image.png"} width={200} height={200} alt={"no image"} />
    </div>
  );
};

export default DummyImage;

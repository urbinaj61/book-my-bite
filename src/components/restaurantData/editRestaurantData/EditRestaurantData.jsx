import { useState } from "react";
import EditRestaurantDetails from "./editRestaurantDetails/EditRestaurantDetails";
import EditRestaurantImages from "./editRestaurantImages/EditRestaurantImages";

const EditRestaurantData = ({ restaurantData }) => {
  const {
    _id,
    name,
    address1,
    address2,
    postCode,
    city,
    email,
    phone,
    description,
    cuisine,
    type,
    images,
    tableTypes,
    menuLinks,
    openingTimes,
  } = restaurantData;

  const restaurantDetails = {
    name,
    address1,
    address2,
    postCode,
    city,
    email,
    phone,
    description,
    cuisine,
    type,
  };

  const [formData, setFormData] = useState(restaurantDetails);
  const [fileLoading, setFileLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState(images);
  const [fileUrls, setFileUrls] = useState([]);

  const handleSubmit = () => {};

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //===================================Handles multiple Image and pdf uploads to Cloudinary===========================
  const handleFileUpload = async (e, type) => {
    type === "image" ? setImageUrls([]) : setFileUrls([]);

    const files = e.target.files;

    if (!files || files.length === 0) {
      return;
    }

    setFileLoading(true);

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "book-my-bite");
        data.append("cloud_name", "book-my-bite");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/book-my-bite/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to upload file: ${file.name}`);
        }

        const fileData = await response.json();

        return { url: fileData.url, assetId: fileData.asset_id };
      });

      if (fileLoading) return <p>Loading....</p>;

      const newFileUrls = await Promise.all(uploadPromises);

      //type === "image" ? setImageUrls([]) : setFileUrls([]);
      const addedNewFileUrls =
        type === "image"
          ? [...images, ...newFileUrls]
          : [...menuLinks, ...newFileUrls];

      console.log(addedNewFileUrls);

      type === "image"
        ? setImageUrls(addedNewFileUrls)
        : setFileUrls(addedNewFileUrls);
    } catch (err) {
      console.error(err);
      type === "image" ? setImageUrls([]) : setFileUrls([]);
    } finally {
      setFileLoading(false);
    }
  };

  //===================================Handle File uploads==End============================

  return (
    <section>
      <h2>Edit RestaurantData</h2>
      <form onSubmit={handleSubmit}>
        <EditRestaurantDetails
          restaurantDetails={restaurantDetails}
          onDetailsChange={handleDetailsChange}
        />
        <EditRestaurantImages
          setImageUrls={setImageUrls}
          _id={_id}
          imageUrls={imageUrls}
          onFileUpload={handleFileUpload}
          fileLoading={fileLoading}
        />

        {/* <CreateRestaurantMenus
          handleFileUpload={handleFileUpload}
          fileUrls={fileUrls}
          fileLoading={fileLoading}
        />

         <CreateTableTypes
          handleTableCreation={handleTableCreation}
          tableTypes={tableTypes}
          seatsRefs={seatsRefs}
          inputRef={inputRef}
          handleSeatsInsert={handleSeatsInsert}
          isAccordionOpenTableTypes={isAccordionOpenTableTypes}
        />

        <CreateOpeningTimes
          isAccordionOpenOpeningTimes={isAccordionOpenOpeningTimes}
          toggleAccordionOpeningTimes={toggleAccordionOpeningTimes}
          openingTimes={openingTimes}
          openingTimesRefs={openingTimesRefs}
          handleOpeningTimesCreation={handleOpeningTimesCreation}
        />
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <CreateTimeSlots
            isAccordionOpenTimeSlots={isAccordionOpenTimeSlots}
            toggleAccordionTimeSlots={toggleAccordionTimeSlots}
            timeSlotRef={timeSlotRef}
            handleTimeSlotCreation={handleTimeSlotCreation}
          />
        )} */}

        <button type="submit" className="restaurant-editData-submit-button">
          Edit your data
        </button>
      </form>
    </section>
  );
};

export default EditRestaurantData;

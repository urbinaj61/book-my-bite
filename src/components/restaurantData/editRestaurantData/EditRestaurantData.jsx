import { useState, useRef } from "react";
import EditRestaurantDetails from "./editRestaurantDetails/EditRestaurantDetails";
import EditRestaurantImages from "./editRestaurantImages/EditRestaurantImages";
import EditRestaurantMenus from "./editRestaurantMenus/EditRestaurantMenus";
import EditTableTypes from "./editTableTypes/EditTableTypes";

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
  const [fileUrls, setFileUrls] = useState(menuLinks);
  const [editTableTypes, setEditTableTypes] = useState(tableTypes);
  const [isAccordionOpenTableTypes, setIsAccordionOpenTableTypes] =
    useState(false);

  const inputRef = useRef(null);
  const seatsRefs = useRef({});

  const handleSubmit = () => {};

  //=======================================Handle Details change======================================================
  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //=======================================Handle Details change======End================================================

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

      const addedNewFileUrls =
        type === "image"
          ? [...images, ...newFileUrls]
          : [...menuLinks, ...newFileUrls];

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

  //===================================Handles Table creation==============================
  //This function accepts a numeric input. The user tells us how many tables they will have in their
  //restaurant. We build from this and display numbered tables so the user can allocate seating.

  const handleTableCreation = () => {
    const tableCount = inputRef.current.value;
    setIsAccordionOpenTableTypes(true);

    //Create an array of objects containing [{name: "Table 1" seats: whatever was there before}
    const tableArray = [];
    for (let i = 1; i <= tableCount; i++) {
      const tableName = `Table ${i}`;

      const existingTable = editTableTypes.find(
        (table) => table.name === tableName
      );

      const seats = existingTable ? existingTable.seats : null;

      const obj = { name: tableName, seats: seats };
      tableArray.push(obj);
    }

    setEditTableTypes(tableArray);
  };

  //===================================Handles Table creation====End==========================

  //===================================Handle Seats creation==================================
  //Seats are entered per table created
  const handleSeatsInsert = () => {
    const updatedTables = editTableTypes.map((table) => {
      const inputElement = seatsRefs.current[table.name];

      if (inputElement) {
        return { ...table, seats: inputElement.value };
      }
      return table;
    });

    setEditTableTypes(updatedTables);
    setIsAccordionOpenTableTypes(false);
  };

  //===================================Handle Seats=====End==================================

  //===================================Handle Seats change===================================
  const handleSeatChange = (e, tableName) => {
    const { value } = e.target; // Create a new array with the updated seat value
    const updatedTables = editTableTypes.map((table) => {
      if (table.name === tableName) {
        return { ...table, seats: value };
      }
      return table;
    });
    setEditTableTypes(updatedTables);
  };
  //===================================Handle Seats change End===============================

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

        <EditRestaurantMenus
          setFileUrls={setFileUrls}
          _id={_id}
          fileUrls={fileUrls}
          onFileUpload={handleFileUpload}
          fileLoading={fileLoading}
        />

        <EditTableTypes
          handleTableCreation={handleTableCreation}
          handleSeatChange={handleSeatChange}
          editTableTypes={editTableTypes}
          seatsRefs={seatsRefs}
          inputRef={inputRef}
          handleSeatsInsert={handleSeatsInsert}
          isAccordionOpenTableTypes={isAccordionOpenTableTypes}
        />

        {/* <CreateOpeningTimes
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

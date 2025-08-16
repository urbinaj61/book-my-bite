import { useState, useRef } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import generateTimeSlots from "../../../../utilities/generateTimeSlots";
import isValidTime from "../../../../utilities/isValidTime";
import EditRestaurantDetails from "./editRestaurantDetails/EditRestaurantDetails";
import EditRestaurantImages from "./editRestaurantImages/EditRestaurantImages";
import EditRestaurantMenus from "./editRestaurantMenus/EditRestaurantMenus";
import EditTableTypes from "./editTableTypes/EditTableTypes";
import EditOpeningTimes from "./editRestaurantOpeningTimes/EditOpeningTimes";
import EditTimeSlots from "./editRestaurantTimeSlots/EditTimeSlots";

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
    timeSlotInterval,
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
  const [errorMessage, setErrorMessage] = useState(null);
  const [imageUrls, setImageUrls] = useState(images);
  const [fileUrls, setFileUrls] = useState(menuLinks);
  const [editTableTypes, setEditTableTypes] = useState(tableTypes);
  const [isAccordionOpenTableTypes, setIsAccordionOpenTableTypes] =
    useState(false);
  const [isAccordionOpenOpeningTimes, setIsAccordionOpenOpeningTimes] =
    useState(false);
  const [isAccordionOpenTimeSlots, setIsAccordionOpenTimeSlots] =
    useState(false);
  const [editOpeningTimes, setEditOpeningTimes] = useState(openingTimes);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);
  const seatsRefs = useRef({});
  const openingTimesRefs = useRef({});
  const timeSlotRef = useRef(null);

  const { mutate } = useSWR(`/api/restaurantData/updateRestaurantData/${_id}`);
  const router = useRouter();

  //===================================Handle Submit==Handles POST to backend============================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const restaurantData = Object.fromEntries(formData);

    //We need to clean this up because of the refs we've used.
    //Once clean we will insert the real data ready for our POST.
    const cleanedData = {};

    for (const key in restaurantData) {
      if (
        !key.startsWith("Table") &&
        key !== "image" &&
        key !== "menu" &&
        key !== "tablesTypes"
      ) {
        cleanedData[key] = restaurantData[key];
      }
    }

    cleanedData.images = imageUrls;
    cleanedData.menuLinks = fileUrls;
    cleanedData.tableTypes = editTableTypes;
    cleanedData.openingTimes = editOpeningTimes;

    const response = await fetch(
      `/api/restaurantData/updateRestaurantData/${_id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanedData),
      }
    );

    if (response.ok) {
      const result = await response.json(); //A new restaurant id is returned to us. If we need it.

      mutate();
      router.push(`/showRestaurantData/${cleanedData.email}`);
    }
    setIsLoading(false);
    return;
  };

  //===================================Handle Submit==End============================

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

        return {
          url: fileData.url,
          assetId: fileData.asset_id,
          original_filename: fileData.original_filename,
        };
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

  //===================================Handles Table edit==============================
  //This function accepts a numeric input. The user can change how many tables they will have in their
  //restaurant. We build from this and display numbered tables so the user can allocate seating.

  const handleTableCreation = () => {
    const tableCount = inputRef.current.value;

    setIsAccordionOpenTableTypes(true);

    //Create an array of objects containing [{table: "1" seats: whatever was there before}
    const tableArray = [];
    for (let i = 1; i <= tableCount; i++) {
      const existingTable = editTableTypes.find(
        (table) => table.table === String(i)
      );

      const seats = existingTable ? existingTable.seats : null;

      const obj = { table: String(i), seats: seats };
      tableArray.push(obj);
    }

    setEditTableTypes(tableArray);
  };

  //===================================Handles Table edit====End==========================

  //===================================Handle Seats edit==================================
  //Seats are entered per table created
  const handleSeatsInsert = () => {
    const updatedTables = editTableTypes.map((table) => {
      const inputElement = seatsRefs.current[table.table];

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
    const { value } = e.target;
    const updatedTables = editTableTypes.map((table) => {
      if (table.table === tableName) {
        return { ...table, seats: String(value) };
      }
      return table;
    });
    setEditTableTypes(updatedTables);
  };
  //===================================Handle Seats change End===============================

  //===================================Handle opening times creation=========================
  //We need all opening times for all days of the week. Only Hours between 00 and 24, and minutes either 00 or 30
  //are permitted. As well as "closed".
  const handleOpeningTimesEdit = () => {
    setErrorMessage(null);
    let allValid = true;
    const updatedOpeningTimes = editOpeningTimes.map((opening) => {
      const openInput = openingTimesRefs.current[`${opening.day}-open`];
      const closeInput = openingTimesRefs.current[`${opening.day}-close`];

      if (openInput && closeInput) {
        const openValue = openInput.value;
        const closeValue = closeInput.value;

        if (isValidTime(openValue) && isValidTime(closeValue)) {
          return {
            ...opening,
            open: openValue,
            close: closeValue,
          };
        } else {
          allValid = false;
          return opening;
        }
      }
      return opening;
    });

    if (allValid) {
      setEditOpeningTimes(updatedOpeningTimes);
      setIsAccordionOpenOpeningTimes(false);
    } else {
      alert(
        `Invalid time format. Please use HH:mm or 'closed'.
         Valid times are HH=00 to 24, mm= 00 or 30`
      );
    }
  };

  //===================================Handle opening times====End=========================

  //===================================Handle timeSlot intervals===========================
  //Here we let the user assign a table time slot interval. From this and the opening times we can
  //create all timeslots for that day. Avoids for the user having to input all this data.
  const handleTimeSlotEdit = () => {
    if (
      editOpeningTimes[0].open !== undefined &&
      editOpeningTimes[0].open !== null
    ) {
      setErrorMessage(null);
      const updatedOpeningTimes = editOpeningTimes.map((time) => {
        const timeSlots = generateTimeSlots(
          time.open,
          time.close,
          timeSlotRef.current.value
        );
        return { ...time, timeSlots };
      });
      setEditOpeningTimes(updatedOpeningTimes);
      setIsAccordionOpenTimeSlots(false);
    }
  };
  //===================================Handle timeSlot intervals===End======================

  //These toggles control the flow when opening times and timeslots are entered
  const toggleAccordionOpeningTimes = (e) => {
    e.preventDefault();
    setIsAccordionOpenOpeningTimes(!isAccordionOpenOpeningTimes);
  };

  const toggleAccordionTimeSlots = (e) => {
    e.preventDefault();
    setIsAccordionOpenTimeSlots(!isAccordionOpenTimeSlots);
  };

  return (
    <section className="main-restaurant-content-wrapper">
      <section className="restaurant-content-container">
        <h2 className="restaurant-content-heading">Edit RestaurantData</h2>
        <aside className="restaurant-content-card">
          <form onSubmit={handleSubmit}>
            <aside className="restaurant-accordion-content">
              <EditRestaurantDetails
                formData={formData}
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

              <EditOpeningTimes
                isAccordionOpenOpeningTimes={isAccordionOpenOpeningTimes}
                toggleAccordionOpeningTimes={toggleAccordionOpeningTimes}
                editOpeningTimes={editOpeningTimes}
                openingTimesRefs={openingTimesRefs}
                handleOpeningTimesEdit={handleOpeningTimesEdit}
              />
              {errorMessage ? (
                <p>{errorMessage}</p>
              ) : (
                <EditTimeSlots
                  timeSlotInterval={timeSlotInterval}
                  isAccordionOpenTimeSlots={isAccordionOpenTimeSlots}
                  toggleAccordionTimeSlots={toggleAccordionTimeSlots}
                  timeSlotRef={timeSlotRef}
                  handleTimeSlotCreation={handleTimeSlotEdit}
                />
              )}
            </aside>
            <aside className="restaurant-buttons-container">
              <button type="submit" className="restaurant-data-edit-button">
                {isLoading ? "Updating..." : "Edit your data"}
              </button>
              <Link
                href={`/showRestaurantData/${email}`}
                className="restaurant-edit-link"
              >
                <button type="button" className="booking-cancel-button">
                  Cancel Edit
                </button>
              </Link>
            </aside>
          </form>
        </aside>
      </section>
    </section>
  );
};

export default EditRestaurantData;

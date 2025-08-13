import { useState, useRef } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import generateTimeSlots from "../../../../utilities/generateTimeSlots";
import isValidTime from "../../../../utilities/isValidTime";
import CreateRestaurantDetails from "./createRestaurantDetails/CreateRestaurantDetails";
import CreateRestaurantImages from "./createRestaurantImages/CreateRestaurantImages";
import CreateRestaurantMenus from "./createRestaurantMenus/CreateRestaurantMenus";
import CreateTableTypes from "./createTableTypes/CreateTableTypes";
import CreateOpeningTimes from "./createOpeningTimes/CreateOpeningTimes";
import CreateTimeSlots from "./createTimeSlots/CreateTimeSlots";

const CreateRestaurantData = () => {
  //Loads of state unfortunately
  const [fileLoading, setFileLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [fileUrls, setFileUrls] = useState([]);
  const [tableTypes, setTableTypes] = useState([]);
  const [openingTimes, setOpeningTimes] = useState([
    { day: "Monday", open: null, close: null },
    { day: "Tuesday", open: null, close: null },
    { day: "Wednesday", open: null, close: null },
    { day: "Thursday", open: null, close: null },
    { day: "Friday", open: null, close: null },
    { day: "Saturday", open: null, close: null },
    { day: "Sunday", open: null, close: null },
  ]);
  const [isAccordionOpenTableTypes, setIsAccordionOpenTableTypes] =
    useState(false);
  const [isAccordionOpenOpeningTimes, setIsAccordionOpenOpeningTimes] =
    useState(false);
  const [isAccordionOpenTimeSlots, setIsAccordionOpenTimeSlots] =
    useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //Input refs to control flow of inputs
  const inputRef = useRef(null);
  const seatsRefs = useRef({});
  const openingTimesRefs = useRef({});
  const timeSlotRef = useRef(null);

  //Declare a router
  const router = useRouter();

  //Mutate
  const { mutate } = useSWR(`/api/createRestaurantData`);

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
    cleanedData.tableTypes = tableTypes;
    cleanedData.openingTimes = openingTimes;

    const response = await fetch(`/api/createRestaurantData/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleanedData),
    });

    if (response.ok) {
      const result = await response.json(); //A new restaurant id is returned to us. If we need it.

      mutate();
      router.push(`/showRestaurantData/${cleanedData.email}`);
    }
    setIsLoading(false);
    return;
  };

  //===================================Handle Submit==End============================

  //===================================Handles multiple Image and pdf uploads to Cloudinary===========================
  const handleFileUpload = async (e, type) => {
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

      type === "image"
        ? setImageUrls((prevImageUrls) => [...prevImageUrls, ...newFileUrls])
        : setFileUrls((prevFileUrls) => [...prevFileUrls, ...newFileUrls]);
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

    //Create an array of objects containing [{name: "Table 1" seats: "to be entered"}]
    const tableArray = [];
    for (let i = 1; i <= tableCount; i++) {
      const obj = { table: `${i}`, seats: null };
      tableArray.push(obj);
    }

    setTableTypes(tableArray);
  };

  //===================================Handles Table creation====End==========================

  //===================================Handle Seats creation==================================
  //Seats are entered per table created
  const handleSeatsInsert = () => {
    const updatedTables = tableTypes.map((table) => {
      const inputElement = seatsRefs.current[table.table];

      if (inputElement) {
        return { ...table, seats: inputElement.value };
      }
      return table;
    });

    setTableTypes(updatedTables);
    setIsAccordionOpenTableTypes(false);
  };

  //===================================Handle Seats=====End==================================

  //===================================Handle opening times creation=========================
  //We need all opening times for all days of the week. Only Hours between 00 and 24, and minutes either 00 or 30
  //are permitted. As well as "closed".
  const handleOpeningTimesCreation = () => {
    setErrorMessage(null);
    let allValid = true;
    const updatedOpeningTimes = openingTimes.map((opening) => {
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
      setOpeningTimes(updatedOpeningTimes);
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
  const handleTimeSlotCreation = () => {
    if (openingTimes[0].open !== undefined && openingTimes[0].open !== null) {
      setErrorMessage(null);
      const updatedOpeningTimes = openingTimes.map((time) => {
        const timeSlots = generateTimeSlots(
          time.open,
          time.close,
          timeSlotRef.current.value
        );
        return { ...time, timeSlots };
      });
      setOpeningTimes(updatedOpeningTimes);
      setIsAccordionOpenTimeSlots(false);
      setShowSubmitButton(true);
    } else {
      setErrorMessage("Please enter opening times");
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
    <section>
      <h1>Create restaurant data</h1>

      <form onSubmit={handleSubmit}>
        <CreateRestaurantDetails />

        <CreateRestaurantImages
          handleFileUpload={handleFileUpload}
          imageUrls={imageUrls}
          setImageUrls={setImageUrls}
          fileLoading={fileLoading}
        />
        <CreateRestaurantMenus
          handleFileUpload={handleFileUpload}
          fileUrls={fileUrls}
          setFileUrls={setFileUrls}
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
        )}

        {showSubmitButton && (
          <button type="submit" className="restaurant-data-submit-button">
            {isLoading ? "Creating..." : "Create your data"}
          </button>
        )}
      </form>
    </section>
  );
};

export default CreateRestaurantData;

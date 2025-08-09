import { Fragment } from "react";

const EditRestaurantImages = ({
  setImageUrls,
  _id,
  imageUrls,
  onFileUpload,
  fileLoading,
}) => {
  const handleImageDelete = async (e, assetId) => {
    e.preventDefault();

    const newImageUrls = imageUrls.filter((image) => {
      return image.assetId !== assetId;
    });

    setImageUrls(newImageUrls);

    const response = await fetch(
      `/api/editRestaurantData/deleteRestaurantImage/${assetId}?_id=${_id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      console.error("Failed to delete Image");
    }
  };

  return (
    <details classname="restaurant-accordion">
      <summary classname="restaurant-accordion-header">
        Upload Restaurant Images
      </summary>
      <section className="restaurant-image-upload-container">
        <label htmlFor="restaurant-image" className="restaurant-data-label">
          Upload an Image
        </label>
        <input
          type="file"
          onChange={(e) => onFileUpload(e, "image")}
          className="restaurant-image-input"
          name="image"
          id="restaurant image"
          aria-label="restaurant image"
          multiple
        />
      </section>
      <aside>
        {fileLoading ? (
          <p>Loading....</p>
        ) : (
          imageUrls.map((image, i) => (
            <Fragment key={i}>
              <img
                src={image.url}
                alt="uploaded restaurant"
                className="restaurant-uploaded-image"
              />
              <button onClick={(e) => handleImageDelete(e, image.assetId)}>
                Remove Image
              </button>
            </Fragment>
          ))
        )}
      </aside>
    </details>
  );
};

export default EditRestaurantImages;

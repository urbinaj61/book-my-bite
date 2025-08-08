const CreateRestaurantImages = ({
  handleFileUpload,
  imageUrls,
  fileLoading,
}) => {
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
          onChange={(e) => handleFileUpload(e, "image")}
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
            <img
              key={i}
              src={image.url}
              alt="uploaded restaurant"
              className="restaurant-uploaded-image"
            />
          ))
        )}
      </aside>
    </details>
  );
};

export default CreateRestaurantImages;

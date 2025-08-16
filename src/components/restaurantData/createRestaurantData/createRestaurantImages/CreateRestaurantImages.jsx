import { Fragment, useRef } from "react";

const CreateRestaurantImages = ({
  handleFileUpload,
  imageUrls,
  setImageUrls,
  fileLoading,
}) => {
  const fileInputRef = useRef(null);

  const handleFileDelete = async (e, assetId) => {
    e.preventDefault();

    const newImageUrls = imageUrls.filter((image) => {
      return image.assetId !== assetId;
    });

    setImageUrls(newImageUrls);

    fileInputRef.current && (fileInputRef.current.value = "");
  };

  const handleFileUploadWithReset = (e, type) => {
    handleFileUpload(e, type);
    fileInputRef.current && (fileInputRef.current.value = "");
  };

  return (
    <details>
      <summary className="restaurant-accordion-header">
        Upload Restaurant Images
      </summary>
      <section className="restaurant-accordion-data-container">
        <section className="restaurant-image-upload-container">
          <aside className="file-image-upload">
            <label htmlFor="restaurant-image" className="restaurant-data-label">
              Upload an Image
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => handleFileUploadWithReset(e, "image")}
              className="restaurant-image-input"
              name="image"
              id="restaurant image"
              aria-label="restaurant image"
              multiple
            />
          </aside>

          <aside className="uploaded-images-container">
            {fileLoading ? (
              <p>Loading....</p>
            ) : (
              imageUrls.map((image, i) => (
                <aside className="image-wrapper" key={i}>
                  <img
                    src={image.url}
                    alt="uploaded restaurant"
                    className="restaurant-uploaded-image"
                  />
                  <button
                    className="image-remove-button"
                    onClick={(e) => handleFileDelete(e, image.assetId)}
                  >
                    Remove Image
                  </button>
                </aside>
              ))
            )}
          </aside>
        </section>
      </section>
    </details>
  );
};

export default CreateRestaurantImages;

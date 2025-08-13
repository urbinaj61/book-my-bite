import Link from "next/link";
import { Fragment, useRef } from "react";

const CreateRestaurantMenus = ({
  handleFileUpload,
  fileUrls,
  setFileUrls,
  fileLoading,
}) => {
  const fileInputRef = useRef(null);

  const handleFileDelete = async (e, assetId) => {
    e.preventDefault();

    const newFileUrls = fileUrls.filter((file) => {
      return file.assetId !== assetId;
    });

    setFileUrls(newFileUrls);

    fileInputRef.current && (fileInputRef.current.value = "");
  };

  const handleFileUploadWithReset = (e, type) => {
    handleFileUpload(e, type);
    fileInputRef.current && (fileInputRef.current.value = "");
  };

  return (
    <details className="restaurant-accordion">
      <summary className="restaurant-accordion-header">
        Upload Restaurant Menus
      </summary>
      <section className="restaurant-menu-upload-container">
        <label htmlFor="restaurant-menu" className="restaurant-data-label">
          Upload a menu pdf
        </label>
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => handleFileUploadWithReset(e, "pdf")}
          className="restaurant-menu-input"
          name="menu"
          id="restaurant menu"
          aria-label="restaurant menu"
          multiple
        />
      </section>
      <aside className="restaurant-menu-links-container">
        {fileLoading && !fileUrls ? (
          <p>Loading....</p>
        ) : (
          fileUrls.map((file, i) => (
            <Fragment key={i}>
              <Link
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="restaurant-menu-links"
              >
                {file.url}
              </Link>
              <button onClick={(e) => handleFileDelete(e, file.assetId)}>
                Remove File
              </button>
            </Fragment>
          ))
        )}
      </aside>
    </details>
  );
};

export default CreateRestaurantMenus;

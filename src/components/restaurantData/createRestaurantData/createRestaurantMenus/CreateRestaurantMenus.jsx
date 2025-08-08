import Link from "next/link";

const CreateRestaurantMenus = ({ handleFileUpload, fileUrls, fileLoading }) => {
  return (
    <details classname="restaurant-accordion">
      <summary classname="restaurant-accordion-header">
        Upload Restaurant Menus
      </summary>
      <section className="restaurant-menu-upload-container">
        <label htmlFor="restaurant-menu" className="restaurant-data-label">
          Upload a menu pdf
        </label>
        <input
          type="file"
          onChange={(e) => handleFileUpload(e, "pdf")}
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
          fileUrls.map((file, i) => {
            return (
              <Link
                key={i}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="restaurant-menu-links"
              >
                {file.url}
              </Link>
            );
          })
        )}
      </aside>
    </details>
  );
};

export default CreateRestaurantMenus;

import Link from "next/link";

const RestauranrtMenuLinks = ({ menuLinks }) => {
  const renderedMenuLinks =
    menuLinks.length > 0
      ? menuLinks.map((menu, i) => {
          return (
            <div key={i}>
              <Link
                href={menu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="restaurant-link"
              >
                {menu.original_filename}
              </Link>
            </div>
          );
        })
      : null;
  return (
    <details className="restaurant-accordion">
      <summary className="restaurant-accordion-header">
        Restaurant Menu Links
      </summary>
      <section className="restaurant-content-card">
        <section className="restaurant-data-container">
          {renderedMenuLinks}
        </section>
      </section>
    </details>
  );
};

export default RestauranrtMenuLinks;

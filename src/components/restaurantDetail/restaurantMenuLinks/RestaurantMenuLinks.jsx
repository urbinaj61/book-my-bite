const RestauranrtMenuLinks = ({ menuLinks }) => {
  const renderedMenuLinks =
    menuLinks.length > 0
      ? menuLinks.map((menu) => {
          return (
            <>
              <p>{menu.type}</p>
              <p>{menu.link}</p>
            </>
          );
        })
      : null;
  return renderedMenuLinks;
};

export default RestauranrtMenuLinks;

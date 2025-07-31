const RestauranrtMenuLinks = ({ menuLinks }) => {
  const renderedMenuLinks =
    menuLinks.length > 0
      ? menuLinks.map((menu, i) => {
          return (
            <div key={i}>
              <p>{menu.type}</p>
              <p>{menu.link}</p>
            </div>
          );
        })
      : null;
  return renderedMenuLinks;
};

export default RestauranrtMenuLinks;

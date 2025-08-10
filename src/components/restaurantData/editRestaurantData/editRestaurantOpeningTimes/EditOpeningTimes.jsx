const EditOpeningTimes = ({
  isAccordionOpenOpeningTimes,
  toggleAccordionOpeningTimes,
  editOpeningTimes,
  openingTimesRefs,
  handleOpeningTimesEdit,
}) => {
  return (
    <details
      className="restaurant-accordion"
      open={isAccordionOpenOpeningTimes}
    >
      <summary
        className="restaurant-accordion-header"
        onClick={toggleAccordionOpeningTimes}
      >
        Edit opening times
      </summary>
      <section className="restaurant-openingTimes-container">
        {editOpeningTimes.map((opening) => (
          <div key={opening.day}>
            <label htmlFor={`opening-${opening.day}`}>{opening.day}:</label>
            <input
              type="text"
              id={`opening-${opening.day}-open`}
              ref={(elem) =>
                (openingTimesRefs.current[`${opening.day}-open`] = elem)
              }
              placeholder="Open Time (HH:mm)"
              defaultValue={opening.open || ""}
            />
            <input
              type="text"
              id={`opening-${opening.day}-close`}
              ref={(elem) =>
                (openingTimesRefs.current[`${opening.day}-close`] = elem)
              }
              defaultValue={opening.close || ""}
            />
          </div>
        ))}
        <button type="button" onClick={handleOpeningTimesEdit}>
          Enter
        </button>
      </section>
    </details>
  );
};

export default EditOpeningTimes;

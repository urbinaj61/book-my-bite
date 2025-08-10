const CreateOpeningTimes = ({
  isAccordionOpenOpeningTimes,
  toggleAccordionOpeningTimes,
  openingTimes,
  openingTimesRefs,
  handleOpeningTimesCreation,
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
        Add opening times
      </summary>
      <section className="restaurant-openingTimes-container">
        {openingTimes.map((opening) => (
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
              placeholder="Close Time (HH:mm)"
              defaultValue={opening.close || ""}
            />
          </div>
        ))}
        <button type="button" onClick={handleOpeningTimesCreation}>
          Enter
        </button>
      </section>
    </details>
  );
};

export default CreateOpeningTimes;

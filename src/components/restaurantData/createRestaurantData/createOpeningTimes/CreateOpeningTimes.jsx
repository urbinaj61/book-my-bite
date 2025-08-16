const CreateOpeningTimes = ({
  isAccordionOpenOpeningTimes,
  toggleAccordionOpeningTimes,
  openingTimes,
  openingTimesRefs,
  handleOpeningTimesCreation,
}) => {
  return (
    <details open={isAccordionOpenOpeningTimes}>
      <summary
        className="restaurant-accordion-header"
        onClick={toggleAccordionOpeningTimes}
      >
        Add opening times
      </summary>
      <section className="restaurant-accordion-data-container">
        <section className="restaurant-openingTimes-container">
          {openingTimes.map((opening) => (
            <aside key={opening.day} className="opening-times-day">
              <label htmlFor={`opening-${opening.day}`}>{opening.day}:</label>
              <input
                className="create-restaurant-seat-input"
                type="text"
                id={`opening-${opening.day}-open`}
                ref={(elem) =>
                  (openingTimesRefs.current[`${opening.day}-open`] = elem)
                }
                placeholder="Open Time (HH:mm)"
                defaultValue={opening.open || ""}
              />
              <input
                className="create-restaurant-seat-input"
                type="text"
                id={`opening-${opening.day}-close`}
                ref={(elem) =>
                  (openingTimesRefs.current[`${opening.day}-close`] = elem)
                }
                placeholder="Close Time (HH:mm)"
                defaultValue={opening.close || ""}
              />
            </aside>
          ))}
          <button
            className="table-enter-button"
            type="button"
            onClick={handleOpeningTimesCreation}
          >
            Enter
          </button>
        </section>
      </section>
    </details>
  );
};

export default CreateOpeningTimes;

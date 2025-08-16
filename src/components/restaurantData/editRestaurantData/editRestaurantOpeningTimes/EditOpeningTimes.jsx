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
      <section className="restaurant-accordion-data-container">
        <section className="restaurant-openingTimes-container">
          {editOpeningTimes.map((opening) => (
            <aside key={opening.day} className="opening-times-day">
              <label htmlFor={`opening-${opening.day}`}>{opening.day}:</label>
              <aside className="opening-times-inputs">
                <input
                  className="edit-restaurant-seat-input"
                  type="text"
                  id={`opening-${opening.day}-open`}
                  ref={(elem) =>
                    (openingTimesRefs.current[`${opening.day}-open`] = elem)
                  }
                  placeholder="Open Time (HH:mm)"
                  defaultValue={opening.open || ""}
                />
                <input
                  className="edit-restaurant-seat-input"
                  type="text"
                  id={`opening-${opening.day}-close`}
                  ref={(elem) =>
                    (openingTimesRefs.current[`${opening.day}-close`] = elem)
                  }
                  defaultValue={opening.close || ""}
                />
              </aside>
            </aside>
          ))}
          <button
            className="table-enter-button"
            type="button"
            onClick={handleOpeningTimesEdit}
          >
            Enter
          </button>
        </section>
      </section>
    </details>
  );
};

export default EditOpeningTimes;

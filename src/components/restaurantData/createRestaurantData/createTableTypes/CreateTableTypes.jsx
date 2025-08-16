import { Fragment } from "react";

const CreateTableTypes = ({
  handleTableCreation,
  tableTypes,
  seatsRefs,
  inputRef,
  handleSeatsInsert,
  isAccordionOpenTableTypes,
}) => {
  return (
    <details open={isAccordionOpenTableTypes}>
      <summary className="restaurant-accordion-header">Add tables</summary>
      <section className="restaurant-accordion-data-container">
        <section className="restaurant-tables-container">
          <label htmlFor="restaurant-tables" className="restaurant-tables">
            Add Tables
          </label>
          <input
            type="text"
            className="edit-restaurant-input-tables"
            name="tablesTypes"
            id="restaurant-tables"
            aria-label="restaurant tables"
            ref={inputRef}
          />
          <button
            className="table-enter-button"
            type="button"
            onClick={handleTableCreation}
          >
            Enter
          </button>
        </section>
        {tableTypes.length > 0 && (
          <aside className="restaurant-seats-inputs-container">
            <label htmlFor="restaurant-seats">Please enter seats</label>
            {tableTypes.map((table, i) => {
              return (
                <Fragment key={i}>
                  <label className="restaurant-seat-label">
                    Table {table.table}
                  </label>

                  <input
                    type="text"
                    className="edit-restaurant-seat-input"
                    name={table.table}
                    id="restaurant-seats"
                    aria-label="restaurant seats"
                    ref={(elem) => (seatsRefs.current[table.table] = elem)}
                    defaultValue={table.seats}
                  />
                </Fragment>
              );
            })}
            <button
              className="table-enter-button"
              type="button"
              onClick={handleSeatsInsert}
            >
              Insert seats
            </button>
          </aside>
        )}
      </section>
    </details>
  );
};

export default CreateTableTypes;

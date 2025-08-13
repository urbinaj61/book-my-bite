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
    <details className="restaurant-accordion" open={isAccordionOpenTableTypes}>
      <summary className="restaurant-accordion-header">Add tables</summary>
      <section className="restaurant-tables-container">
        <label htmlFor="restaurant-tables" className="restaurant-tables">
          Add Tables
        </label>
        <input
          type="text"
          className="restaurant-tables-input"
          name="tablesTypes"
          id="restaurant-tables"
          aria-label="restaurant tables"
          ref={inputRef}
        />
        <button type="button" onClick={handleTableCreation}>
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
                  className="restaurant-seat-input"
                  name={table.table}
                  id="restaurant-seats"
                  aria-label="restaurant seats"
                  ref={(elem) => (seatsRefs.current[table.table] = elem)}
                  defaultValue={table.seats}
                />
              </Fragment>
            );
          })}
          <button type="button" onClick={handleSeatsInsert}>
            Insert seats
          </button>
        </aside>
      )}
    </details>
  );
};

export default CreateTableTypes;

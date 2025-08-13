import { Fragment } from "react";

const EditTableTypes = ({
  handleTableCreation,
  handleSeatChange,
  editTableTypes,
  seatsRefs,
  inputRef,
  handleSeatsInsert,
  isAccordionOpenTableTypes,
}) => {
  return (
    <details className="restaurant-accordion" open={isAccordionOpenTableTypes}>
      <summary className="restaurant-accordion-header">Edit tables</summary>
      <section className="restaurant-tables-container">
        <label htmlFor="restaurant-tables" className="restaurant-tables">
          Edit Tables
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
      {editTableTypes.length > 0 && (
        <aside className="restaurant-seats-inputs-container">
          <label htmlFor="restaurant-seats">Please enter seats</label>
          {editTableTypes.map((table, i) => {
            return (
              <Fragment key={i}>
                <label className="restaurant-seat-label">
                  Table {table.table}
                </label>

                <input
                  type="text"
                  className="restaurant-seat-input"
                  name={table.table}
                  id={`restaurant-seats-${table.table}`}
                  aria-label={`Seats for table ${table.table} `}
                  ref={(elem) => (seatsRefs.current[table.table] = elem)}
                  onChange={(e) => handleSeatChange(e, table.table)}
                  value={table.seats || ""}
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

export default EditTableTypes;

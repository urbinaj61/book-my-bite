const TableSelection = ({ onTableSelect, availableTables, selectedTable }) => {
  return (
    <>
      <label htmlFor="time-slot-select">Please choose a Table:</label>
      <select
        id="table-select"
        name="table-select"
        value={selectedTable}
        onChange={(e) => onTableSelect(e)}
      >
        <option value="" disabled>
          Please select a table
        </option>

        {availableTables.length > 0 ? (
          availableTables.map((table, index) => (
            <option key={index} value={`${table.name}-${table.seats}`}>
              {`${table.name} - Seating for ${table.seats}`}
            </option>
          ))
        ) : (
          <option value="" disabled>
            `No tables available`
          </option>
        )}
      </select>
    </>
  );
};

export default TableSelection;

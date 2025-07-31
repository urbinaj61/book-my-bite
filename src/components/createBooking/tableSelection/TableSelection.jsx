const TableSelection = ({ onTableSelect, tables, selectedTable }) => {
  return (
    <>
      <label htmlFor="time-slot-select">Please choose a Table:</label>
      <select
        id="table-select"
        name="tableBooked"
        value={selectedTable}
        onChange={(e) => onTableSelect(e)}
      >
        <option value="" disabled>
          Please select a table
        </option>

        {tables.map((table, index) => (
          <option key={index} value={`${table.name}-${table.seats}`}>
            {`${table.name} - Seating for ${table.seats}`}
          </option>
        ))}
      </select>
    </>
  );
};

export default TableSelection;

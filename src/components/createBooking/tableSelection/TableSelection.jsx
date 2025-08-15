const TableSelection = ({ onTableSelect, tables, selectedTable }) => {
  // Find the selected table object
  const selectedTableObject = tables.find(
    (table) => table.table === selectedTable.table
  );

  // Filter out the selected table from the rest
  const otherTables = tables.filter(
    (table) => table.table !== selectedTable.table
  );

  // Create a new, reordered array with the selected table first
  const reorderedTables = selectedTableObject
    ? [selectedTableObject, ...otherTables]
    : tables;

  return (
    <>
      <label htmlFor="table-select">Please choose a Table:</label>
      <select
        id="table-select"
        name="tableBooked"
        value={selectedTable}
        onChange={(e) => onTableSelect(e)}
        className="table-select"
      >
        <option value="" disabled>
          Please select a table
        </option>

        {reorderedTables.map((table, index) => (
          <option key={index} value={`${table.table}-${table.seats}`}>
            {`${table.table} - Seating for ${table.seats}`}
          </option>
        ))}
      </select>
    </>
  );
};

export default TableSelection;

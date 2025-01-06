import { ReactEventHandler, useState } from "react";
const NumberedTable = () => {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [tableData, setTableData] = useState<number[][]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let number = 1;
    const generatedTable = Array.from({ length: rows }, (_, rowIndex) => {
      const row = Array.from({ length: cols }, () => number++);
      return rowIndex % 2 === 0 ? row : row.reverse();
    });
    setTableData(generatedTable);
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <label>
          Number of Rows:
          <input
            type="number"
            value={rows}
            onChange={(e) =>
              setRows(Math.max(0, parseInt(e.target.value)) || 0)
            }
          />
        </label>
        <label>
          Number of Columns:
          <input
            type="number"
            value={cols}
            onChange={(e) =>
              setCols(Math.max(0, parseInt(e.target.value)) || 0)
            }
          />
        </label>
        <br />
        <button style={{ width: "100px" }} type="submit">
          Submit
        </button>
      </form>

      {tableData.length > 0 && (
        <table
          style={{
            marginTop: "20px",
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <tbody>
            {tableData.map((row: number[], rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell: number, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      textAlign: "center",
                      fontWeight: rowIndex % 2 === 0 ? "bold" : "normal",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NumberedTable;

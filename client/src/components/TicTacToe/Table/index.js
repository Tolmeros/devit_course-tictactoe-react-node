import React, {useMemo} from 'react';
import Cell from "../Cell";

const Table = ({cells, handleClick}) => {
  const tableRows = useMemo(() => {
    const rows = [];
    let row = [];

    for (let i = 0; i < cells.length; i++) {
      row.push(
        <Cell num={i} value={cells[i]} handleClick={handleClick} key={i} />
      )

      if ((i + 1) % 3 === 0) {
        rows.push(
          <tr key={rows.length}>
            {row}
          </tr>
        )

        row = [];
      }
    }

    return rows;
  }, [cells, handleClick])

  return (
    <table>
      <tbody>
      {tableRows}
      </tbody>
    </table>
  );
};

export default Table;
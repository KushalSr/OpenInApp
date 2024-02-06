import React from 'react';

export default function Table({
  dataSource,
  columns,
  rowClassName,
  id,
}) {
  return (
    <div
      id={id}
      className="w-full  cursor-default rounded-xl bg-Neutral-10 px-4 font-lexend"
    >
      <table className=" w-[66.56rem]  overflow-auto px-4">
        <thead>
          <tr>
            {columns?.map((column, index) => (
              <th
                scope="col"
                className={`py-6 pl-6 pr-3 text-left text-sm sm:pl-0 ${column.headerClassName}`}
                key={'th' + index}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="min-w-min">
          {dataSource?.map((dataRow, rowIndex) => {
            return (
              <tr key={'tr' + rowIndex} className={`${rowClassName} `}>
                {columns.map((column, index) => (
                  <td
                    className={`pr-3 ${column.className}  `}
                    key={'td' + index}
                  >
                    {column?.render
                      ? column.render(dataRow, rowIndex)
                      : dataRow[column.dataIndex]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

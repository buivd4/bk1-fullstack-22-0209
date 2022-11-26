import React from "react";

const Table = (props) => {
  // props.records chứa tất cả các bản ghi
  return (
    <div>
      <table
        id="main-table"
        class="border-collapse border border-slate-300 mt-2 text-xl w-full mx-4"
      >
        <tr>
          <th
            className="border-collapse border border-slate-300"
            style={{ width: "5%" }}
          >
            ID
          </th>
          <th
            className="border-collapse border border-slate-300"
            style={{ width: "20%" }}
          >
            Name
          </th>
          <th
            className="border-collapse border border-slate-300"
            style={{ width: "20%" }}
          >
            Description
          </th>
          <th
            className="border-collapse border border-slate-300"
            style={{ width: "10" }}
          >
            Price
          </th>
          <th
            className="border-collapse border border-slate-300"
            style={{ width: "35%" }}
          >
            Action
          </th>
        </tr>
        {props.records.map((record) => (
          <tr key={record.id} className="p-1">
            <td>{record.id}</td>
            <td>{record.name}</td>
            <td>{record.description}</td>
            <td>{record.price}</td>
            <td>
              <span className="flex items-center justify-center space-x-1">
                <button className="w-1/4 h-8 text-xs text-white bg-blue-500 rounded-md">
                  View
                </button>
                <button className="w-1/4 h-8 text-xs text-white bg-green-500 rounded-md">
                  Edit
                </button>
                <button className="w-1/4 h-8 text-xs text-white bg-red-500 rounded-md">
                  Delete
                </button>
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;

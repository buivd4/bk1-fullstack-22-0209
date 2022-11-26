import React from "react";

const Paginate = () => {
  return (
    <div
      id="paginate"
      className="mt-2 flex w-28 h-8 border border-slate-300 rounded-sm text-blue-500 text-xl"
    >
      <button className="w-1/4 border-collapse border-r border-slate-300 hover:bg-blue-500 hover:text-white">
        1
      </button>
      <button className="w-1/4 border-collapse border-r border-slate-300 hover:bg-blue-500 hover:text-white">
        2
      </button>
      <button className="w-1/4 border-collapse border-r border-slate-300 hover:bg-blue-500 hover:text-white">
        ..
      </button>
      <button className="w-1/4 border-collapse border-slate-300 hover:bg-blue-500 hover:text-white">
        {">"}
      </button>
    </div>
  );
};

export default Paginate;

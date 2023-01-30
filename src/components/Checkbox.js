import React from "react";
import { getColorNames } from "../utils/helpers";

const Checkbox = ({ title, colors }) => {
  // onChange = { updateFilters };

  return (
    <div className="my-5 mr-1.5 flex items-center text-sm">
      <input
        type="checkbox"
        id={title}
        value={title}
        name={title}
        className="form-checkbox h-3 w-3 rounded-[3px] text-[#ff755d] focus:text-[#ff755d] focus:ring-0 focus:ring-offset-0"
      />

      <label htmlFor={title} className="mr-2 w-full cursor-pointer pl-40 text-slate-800">
        {colors && getColorNames(title)}
        {!colors && title}
      </label>
    </div>
  );
};

export default Checkbox;
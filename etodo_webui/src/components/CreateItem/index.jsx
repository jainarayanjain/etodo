import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { API } from "../../constants";
import axios from "../../services/axios";

export default function CreateItem() {
  const navigate = useNavigate();
  const textRef = useRef(!null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = { name: textRef.current.value };
    const response = await axios.post(API.V1.TRACKING_TASK, payload);
    if (response.status !== 201) {
      if (response.status === 400) {
        alert(await response.data);
      } else {
        alert("Something went wrong!");
      }
      return;
    }
    navigate(0); // Refresh page
  };

  return (
    <div className="justify-center mt-4 flex">
      <form onSubmit={onSubmit}>
        <div className="flex items-center py-2">
          <input
            type="text"
            id="text"
            placeholder="Text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ref={textRef}
            required={true}
          />
          <button
            type="submit"
            className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

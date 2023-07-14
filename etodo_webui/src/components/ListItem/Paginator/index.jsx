import { useContext, useState } from "react";

import { LeftArrow, RightArrow } from "../../icons";
import { ListItemContext } from "../../../contexts";

export default function Paginator() {
  const [currentPage, setCurrentPage] = useState(1);
  const { itemList, setFilters } = useContext(ListItemContext);

  const onPageChange = (urlString, step) => (e) => {
    e.preventDefault();
    const url = new URL(urlString);
    setCurrentPage((value) => value + step);
    setFilters(Object.fromEntries(url.searchParams));
  };

  return (
    <div className="flex items-center justify-center my-4 space-x-2">
      {itemList.previous ? (
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none"
          onClick={onPageChange(itemList.previous, -1)}
        >
          <LeftArrow />
        </button>
      ) : (
        <></>
      )}
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none">
        {currentPage}
      </button>
      {itemList.next ? (
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none"
          onClick={onPageChange(itemList.next, 1)}
        >
          <RightArrow />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
